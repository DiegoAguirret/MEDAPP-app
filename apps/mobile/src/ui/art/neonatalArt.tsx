import type { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
  Text as SvgText,
} from 'react-native-svg';
import { family } from '../theme';
import { PHOTOS } from './photos';

/**
 * Ilustraciones didácticas de las opciones de las escalas neonatales. Cada dibujo muestra solo lo
 * que dice el texto de su opción (de la fuente citada en la escala); no agrega criterios.
 * Lienzo de 160 × 110; colores propios (piel) que no cambian con el tema.
 */

const K = {
  bg1: '#FCE9DC',
  bg2: '#F4D3BE',
  skin: '#F2C4A8',
  shade: '#E2A88A',
  deep: '#C98466',
  line: '#A35F45',
  areola: '#D9917A',
  nipple: '#C7735C',
  vein: '#9C6FA0',
  crack: '#8E4E38',
  flake: '#FFF6EF',
  mark: '#0E7490',
  white: '#FFFFFF',
} as const;

type Anchor = 'start' | 'middle' | 'end';

function Frame({ id, children }: { id: string; children: ReactNode }) {
  return (
    <Svg viewBox="0 0 160 110" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <Defs>
        <LinearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor={K.bg1} />
          <Stop offset="1" stopColor={K.bg2} />
        </LinearGradient>
      </Defs>
      <Rect x={0} y={0} width={160} height={110} fill={`url(#bg-${id})`} />
      {children}
    </Svg>
  );
}

function Label({
  x,
  y,
  anchor = 'middle',
  children,
}: {
  x: number;
  y: number;
  anchor?: Anchor;
  children: string;
}) {
  return (
    <SvgText x={x} y={y} fontSize={12} fontFamily={family.bold} fill={K.mark} textAnchor={anchor}>
      {children}
    </SvgText>
  );
}

function Caption({
  x,
  y,
  anchor = 'start',
  children,
}: {
  x: number;
  y: number;
  anchor?: Anchor;
  children: string;
}) {
  return (
    <SvgText x={x} y={y} fontSize={10} fontFamily={family.medium} fill={K.line} textAnchor={anchor}>
      {children}
    </SvgText>
  );
}

/* ───────────────────────── Capurro: forma de la oreja ───────────────────────── */

const EAR_OUTLINE =
  'M64 74 C60 52 66 22 86 12 C102 4 117 22 113 44 C111 62 104 74 96 86 C92 94 88 102 78 102 C68 102 64 92 64 74 Z';
/** Pliegue del hélix en tres tramos: borde superior anterior, resto del borde superior y borde posterior. */
const EAR_FOLD = [
  'M68 52 C69 34 76 20 88 16',
  'M88 16 C101 12 110 25 108 44',
  'M108 44 C106 60 100 72 92 84 C88 90 86 94 81 97',
];

function Ear({ id, folds }: { id: string; folds: number }) {
  const path = EAR_FOLD.slice(0, folds).join(' ');
  return (
    <Frame id={id}>
      <G transform="translate(80 55) scale(1.08) translate(-88 -57)">
        <Path d={EAR_OUTLINE} fill={K.skin} stroke={K.line} strokeWidth={1.8} />
        {folds > 0 ? (
          <>
            <Path
              d={path}
              fill="none"
              stroke={K.deep}
              strokeOpacity={0.45}
              strokeWidth={10}
              strokeLinecap="round"
            />
            <Path d={path} fill="none" stroke={K.line} strokeWidth={2.4} strokeLinecap="round" />
          </>
        ) : null}
        <Path
          d="M76 86 C80 72 86 56 92 36"
          fill="none"
          stroke={K.deep}
          strokeWidth={folds > 0 ? 1.6 : 0.8}
          opacity={folds > 0 ? 0.9 : 0.45}
        />
        <Path d="M70 74 C70 62 82 58 88 66 C90 76 80 84 72 80 Z" fill={K.shade} />
        <Circle cx={74} cy={72} r={2.6} fill={K.line} opacity={0.55} />
        <Path d="M62 66 C68 64 70 72 64 77" fill={K.skin} stroke={K.line} strokeWidth={1.2} />
      </G>
    </Frame>
  );
}

/* ──────────────── Tórax (glándula mamaria, tiraje y retracción xifoidea) ──────────────── */

function Chest({ id, zoom, children }: { id: string; zoom: number; children?: ReactNode }) {
  return (
    <Frame id={id}>
      <G transform={`translate(80 58) scale(${zoom}) translate(-80 -68)`}>
        <Path d="M66 0 L94 0 L97 36 L63 36 Z" fill={K.skin} />
        <Path
          d="M4 130 C8 70 28 40 50 34 L110 34 C132 40 152 70 156 130 Z"
          fill={K.skin}
          stroke={K.line}
          strokeWidth={1}
        />
        <Path
          d="M50 42 C60 46 70 46 78 43 M82 43 C90 46 100 46 110 42"
          fill="none"
          stroke={K.deep}
          strokeWidth={0.8}
          opacity={0.7}
        />
        <Circle cx={54} cy={72} r={2.2} fill={K.nipple} />
        <Circle cx={106} cy={72} r={2.2} fill={K.nipple} />
        {children}
      </G>
    </Frame>
  );
}

function Gland({ id, r, label }: { id: string; r: number; label?: string }) {
  return (
    <Chest id={id} zoom={1.55}>
      {r > 0
        ? [54, 106].map((cx) => (
            <Circle
              key={cx}
              cx={cx}
              cy={72}
              r={r}
              fill={K.mark}
              fillOpacity={0.14}
              stroke={K.mark}
              strokeWidth={1}
              strokeDasharray="2.5 1.8"
            />
          ))
        : null}
      {label ? (
        <SvgText
          x={80}
          y={60}
          fontSize={8}
          fontFamily={family.bold}
          fill={K.mark}
          textAnchor="middle"
        >
          {label}
        </SvgText>
      ) : null}
    </Chest>
  );
}

/* ───────────────────────── Capurro: formación del pezón ───────────────────────── */

const STIPPLE: [number, number][] = [
  [-10, -6],
  [-4, -11],
  [5, -10],
  [11, -4],
  [10, 6],
  [3, 11],
  [-6, 10],
  [-11, 2],
  [-7, -1],
  [0, -6],
  [7, 1],
  [-1, 6],
];

function Nipple({
  id,
  areola,
  stippled,
  raised,
  size,
}: {
  id: string;
  areola: number;
  stippled: boolean;
  raised: boolean;
  size?: string;
}) {
  const cx = 64;
  const cy = 42;
  const k = areola / 16;
  return (
    <Frame id={id}>
      <Defs>
        <RadialGradient id={`ar-${id}`} cx="50%" cy="45%" r="50%">
          <Stop offset="0" stopColor={K.nipple} stopOpacity={0.9} />
          <Stop offset="1" stopColor={K.areola} stopOpacity={0.85} />
        </RadialGradient>
      </Defs>
      {areola > 0 ? (
        <Circle
          cx={cx}
          cy={cy}
          r={areola}
          fill={`url(#ar-${id})`}
          stroke={raised ? K.line : 'none'}
          strokeWidth={raised ? 2.4 : 0}
        />
      ) : null}
      {stippled
        ? STIPPLE.map(([dx, dy], i) => (
            <Circle
              key={i}
              cx={cx + dx * k}
              cy={cy + dy * k}
              r={1.7}
              fill={K.line}
              opacity={0.65}
            />
          ))
        : null}
      <Circle
        cx={cx}
        cy={cy}
        r={areola > 0 ? 5 : 2.4}
        fill={K.nipple}
        opacity={areola > 0 ? 1 : 0.6}
      />
      {size ? (
        <G>
          <Line
            x1={cx + areola + 8}
            y1={cy - areola}
            x2={cx + areola + 8}
            y2={cy + areola}
            stroke={K.mark}
            strokeWidth={1.2}
          />
          <Line
            x1={cx + areola + 4}
            y1={cy - areola}
            x2={cx + areola + 12}
            y2={cy - areola}
            stroke={K.mark}
            strokeWidth={1.2}
          />
          <Line
            x1={cx + areola + 4}
            y1={cy + areola}
            x2={cx + areola + 12}
            y2={cy + areola}
            stroke={K.mark}
            strokeWidth={1.2}
          />
          <Label x={cx + areola + 16} y={cy + 4} anchor="start">
            {size}
          </Label>
        </G>
      ) : null}
      {/* Perfil: la areola plana o con borde levantado. */}
      <Rect x={0} y={82} width={160} height={28} fill={K.white} opacity={0.5} />
      <Path
        d={
          raised
            ? 'M20 104 L44 104 C50 104 50 96 56 96 L60 96 C61 90 67 90 68 96 L72 96 C78 96 78 104 84 104 L140 104'
            : areola > 0
              ? 'M20 104 L60 104 C60 99 68 99 68 104 L140 104'
              : 'M20 104 L62 104 C63 102 65 102 66 104 L140 104'
        }
        fill="none"
        stroke={K.line}
        strokeWidth={2}
      />
      <Caption x={96} y={96}>
        {raised ? 'borde elevado' : 'plano'}
      </Caption>
    </Frame>
  );
}

/* ───────────────────────── Capurro: textura de la piel ───────────────────────── */

function Lens({ id, fill, children }: { id: string; fill: string; children?: ReactNode }) {
  return (
    <Frame id={id}>
      <Defs>
        <ClipPath id={`lens-${id}`}>
          <Circle cx={74} cy={52} r={44} />
        </ClipPath>
      </Defs>
      <Line
        x1={106}
        y1={84}
        x2={132}
        y2={108}
        stroke={K.line}
        strokeWidth={8}
        strokeLinecap="round"
      />
      <G clipPath={`url(#lens-${id})`}>
        <Rect x={28} y={6} width={94} height={94} fill={fill} />
        {children}
      </G>
      <Circle cx={74} cy={52} r={44} fill="none" stroke={K.line} strokeWidth={3.2} />
    </Frame>
  );
}

const SKIN_FILLS = ['#F2AFA3', '#F6C7B2', '#EFC0A3', '#E9B596', '#DDA884'];
const FLAKES: [number, number][] = [
  [50, 40],
  [80, 30],
  [92, 62],
  [60, 74],
  [74, 54],
];

function Skin({ id, level }: { id: string; level: 0 | 1 | 2 | 3 | 4 }) {
  return (
    <Lens id={id} fill={SKIN_FILLS[level] ?? K.skin}>
      {level === 0 ? (
        <>
          <Path
            d="M36 30 C52 38 60 52 64 70 C66 80 74 88 92 92 M64 70 C72 60 86 56 104 58 M52 44 C46 52 44 62 40 70"
            fill="none"
            stroke={K.vein}
            strokeWidth={2}
            opacity={0.75}
          />
          <Ellipse cx={60} cy={30} rx={16} ry={6} fill={K.white} opacity={0.55} />
          <Ellipse cx={94} cy={74} rx={10} ry={4} fill={K.white} opacity={0.4} />
        </>
      ) : null}
      {level === 1 ? <Ellipse cx={62} cy={32} rx={18} ry={6} fill={K.white} opacity={0.3} /> : null}
      {level >= 2
        ? FLAKES.map(([x, y], i) => (
            <Path
              key={i}
              d={`M${x} ${y} q 6 -5 12 0`}
              fill="none"
              stroke={K.flake}
              strokeWidth={2.4}
              strokeLinecap="round"
            />
          ))
        : null}
      {level >= 3 ? (
        <Path
          d="M38 46 L54 50 L62 44 M54 50 L58 64 L76 68 L86 60 M76 68 L80 84 M58 64 L46 76 M86 60 L102 56 M70 28 L74 40 L90 42"
          fill="none"
          stroke={level === 4 ? K.crack : K.deep}
          strokeWidth={level === 4 ? 2.6 : 1.1}
          strokeLinejoin="round"
        />
      ) : null}
      {level === 4 ? (
        <Path
          d="M36 62 L46 76 M90 42 L104 36 M80 84 L96 88 M102 56 L112 70 M62 44 L58 30"
          fill="none"
          stroke={K.crack}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
      ) : null}
    </Lens>
  );
}

/* ───────────────────────── Capurro: pliegues plantares ───────────────────────── */

/** Planta del pie en horizontal: dedos a la izquierda, talón a la derecha. */
const FOOT =
  'M14 52 C14 40 22 34 34 34 C48 34 60 36 76 38 C92 40 106 38 120 38 C140 38 148 46 148 56 C148 66 140 74 120 74 C106 74 92 72 76 74 C60 76 48 78 34 78 C22 78 14 66 14 52 Z';
const SOLE_FROM = 16;
const SOLE_TO = 148;
const THIRD = SOLE_FROM + (SOLE_TO - SOLE_FROM) / 3;
const HALF = SOLE_FROM + (SOLE_TO - SOLE_FROM) / 2;
const TOES: [number, number, number, number][] = [
  [9, 42, 6, 7],
  [7, 54, 4.2, 3.6],
  [9, 63, 3.9, 3.3],
  [12, 70, 3.5, 3],
  [17, 76, 3, 2.7],
];

function creases(from: number, to: number, step: number) {
  const xs: number[] = [];
  for (let x = from + step; x < to; x += step) xs.push(x);
  return xs.map((x, i) => `M${x + (i % 2 ? 2 : -1)} 30 Q${x + 4} 56 ${x - 3} 82`).join(' ');
}

function Plantar({
  id,
  marks,
  grooves,
  guide,
}: {
  id: string;
  /** Marcas finas hasta esta x, o null. */
  marks: { to: number; faint: boolean } | null;
  /** Surcos marcados hasta esta x, o null. */
  grooves: number | null;
  guide: 'third' | 'half' | null;
}) {
  const gx = guide === 'third' ? THIRD : HALF;
  return (
    <Frame id={id}>
      <Defs>
        <ClipPath id={`foot-${id}`}>
          <Path d={FOOT} />
        </ClipPath>
      </Defs>
      {TOES.map(([cx, cy, rx, ry], i) => (
        <Ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          fill={K.skin}
          stroke={K.line}
          strokeWidth={1.1}
        />
      ))}
      <Path d={FOOT} fill={K.skin} stroke={K.line} strokeWidth={1.5} />
      <G clipPath={`url(#foot-${id})`}>
        {marks ? (
          <Path
            d={creases(SOLE_FROM, marks.to, 6)}
            fill="none"
            stroke={K.line}
            strokeWidth={marks.faint ? 0.9 : 1.2}
            strokeDasharray={marks.faint ? '3 4' : undefined}
            opacity={marks.faint ? 0.55 : 0.9}
          />
        ) : null}
        {grooves ? (
          <Path
            d={creases(SOLE_FROM, grooves, 8)}
            fill="none"
            stroke={K.crack}
            strokeWidth={2.6}
            strokeLinecap="round"
          />
        ) : null}
      </G>
      {guide ? (
        <G>
          <Line
            x1={gx}
            y1={26}
            x2={gx}
            y2={86}
            stroke={K.mark}
            strokeWidth={1.2}
            strokeDasharray="3 2"
          />
          <Label x={gx} y={100}>
            {guide === 'third' ? '1/3' : '1/2'}
          </Label>
        </G>
      ) : null}
      <Caption x={14} y={100}>
        dedos
      </Caption>
      <Caption x={148} y={100} anchor="end">
        talón
      </Caption>
    </Frame>
  );
}

/* ───────────────────────── Silverman-Andersen ───────────────────────── */

function Arrow({ x, y, up }: { x: number; y: number; up: boolean }) {
  const d = up
    ? `M${x} ${y} L${x} ${y - 16} M${x - 6} ${y - 10} L${x} ${y - 16} L${x + 6} ${y - 10}`
    : `M${x} ${y - 16} L${x} ${y} M${x - 6} ${y - 6} L${x} ${y} L${x + 6} ${y - 6}`;
  return (
    <Path
      d={d}
      fill="none"
      stroke={K.mark}
      strokeWidth={2.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}

function Movement({ id, chest }: { id: string; chest: 'up' | 'still' | 'down' }) {
  return (
    <Frame id={id}>
      {/* Recién nacido de lado, boca arriba: cabeza a la izquierda. */}
      <Circle cx={22} cy={70} r={17} fill={K.skin} stroke={K.line} strokeWidth={1.3} />
      <Path
        d="M36 64 C50 50 70 48 82 54 C92 48 118 48 132 60 C140 68 142 82 134 88 L38 88 Z"
        fill={K.skin}
        stroke={K.line}
        strokeWidth={1.3}
      />
      <Line
        x1={84}
        y1={56}
        x2={84}
        y2={86}
        stroke={K.shade}
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      <Caption x={60} y={102} anchor="middle">
        tórax
      </Caption>
      <Caption x={110} y={102} anchor="middle">
        abdomen
      </Caption>
      {chest === 'still' ? (
        <Path d="M50 34 L70 34" stroke={K.deep} strokeWidth={3} strokeLinecap="round" />
      ) : (
        <Arrow x={60} y={42} up={chest === 'up'} />
      )}
      <Arrow x={110} y={42} up />
    </Frame>
  );
}

function Ribs({ id, level }: { id: string; level: 0 | 1 | 2 }) {
  const ys = [46, 58, 70, 82];
  const w = level === 2 ? 3.4 : 1.6;
  const o = level === 2 ? 0.85 : 0.55;
  return (
    <Chest id={id} zoom={1.25}>
      {ys.map((y) => (
        <G key={y}>
          <Path
            d={`M30 ${y + 6} C44 ${y} 58 ${y - 2} 74 ${y + 2} M130 ${y + 6} C116 ${y} 102 ${y - 2} 86 ${y + 2}`}
            fill="none"
            stroke={K.deep}
            strokeWidth={1}
            opacity={0.55}
          />
          {level > 0 ? (
            <Path
              d={`M34 ${y + 12} C46 ${y + 6} 58 ${y + 5} 72 ${y + 8} M126 ${y + 12} C114 ${y + 6} 102 ${y + 5} 88 ${y + 8}`}
              fill="none"
              stroke={K.line}
              strokeWidth={w}
              opacity={o}
              strokeLinecap="round"
            />
          ) : null}
        </G>
      ))}
    </Chest>
  );
}

function Xiphoid({ id, level }: { id: string; level: 0 | 1 | 2 }) {
  return (
    <Chest id={id} zoom={1.6}>
      <Line x1={80} y1={44} x2={80} y2={84} stroke={K.shade} strokeWidth={2} />
      <Path
        d="M70 86 C74 80 86 80 90 86"
        fill="none"
        stroke={K.deep}
        strokeWidth={1}
        opacity={0.6}
      />
      {level > 0 ? (
        <Path
          d={
            level === 2
              ? 'M68 84 L80 102 L92 84 C86 88 74 88 68 84 Z'
              : 'M74 85 L80 94 L86 85 C83 87 77 87 74 85 Z'
          }
          fill={K.line}
          opacity={level === 2 ? 0.75 : 0.45}
        />
      ) : null}
      {level > 0 ? (
        <Path
          d={`M58 ${level === 2 ? 88 : 86} l8 2 m-3 -5 l3 5 l-5 3 M102 ${level === 2 ? 88 : 86} l-8 2 m3 -5 l-3 5 l5 3`}
          fill="none"
          stroke={K.mark}
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : null}
    </Chest>
  );
}

function Nose({ id, level }: { id: string; level: 0 | 1 | 2 }) {
  const w = [12, 17, 23][level] ?? 12;
  return (
    <Frame id={id}>
      <Path d="M80 6 C76 30 72 48 70 58" fill="none" stroke={K.deep} strokeWidth={1.4} />
      <Path
        d={`M${80 - w - 14} 78 C${80 - w - 18} 60 ${80 - w} 52 80 56 C${80 + w} 52 ${80 + w + 18} 60 ${80 + w + 14} 78 C${80 + w} 90 ${80 - w} 90 ${80 - w - 14} 78 Z`}
        fill={K.skin}
        stroke={K.line}
        strokeWidth={1.6}
      />
      {[80 - w / 2 - 7, 80 + w / 2 + 7].map((cx) => (
        <Ellipse
          key={cx}
          cx={cx}
          cy={79}
          rx={4 + level * 2}
          ry={3.5 + level * 1.2}
          fill={K.line}
          opacity={0.85}
        />
      ))}
      {level > 0 ? (
        <Path
          d={`M${80 - w - 22} 70 l-${5 * level} -2 M${80 - w - 22} 80 l-${5 * level} 2 M${80 + w + 22} 70 l${5 * level} -2 M${80 + w + 22} 80 l${5 * level} 2`}
          stroke={K.mark}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
      ) : null}
    </Frame>
  );
}

function Grunt({ id, level }: { id: string; level: 0 | 1 | 2 }) {
  return (
    <Frame id={id}>
      <Circle cx={58} cy={56} r={40} fill={K.skin} stroke={K.line} strokeWidth={1.5} />
      <Path
        d="M38 48 q7 -5 14 0 M64 48 q7 -5 14 0"
        fill="none"
        stroke={K.line}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      <Ellipse cx={60} cy={74} rx={level > 0 ? 7 : 8} ry={level > 0 ? 5 : 1.4} fill={K.line} />
      {level >= 1 ? (
        <Path
          d="M106 64 q7 10 0 20"
          fill="none"
          stroke={K.mark}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
      ) : null}
      {level === 2 ? (
        <Path
          d="M118 56 q12 18 0 36 M130 48 q16 26 0 52"
          fill="none"
          stroke={K.mark}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
      ) : null}
    </Frame>
  );
}

/* ───────────────────────── Registro ───────────────────────── */

const ART: Record<string, (id: string) => ReactNode> = {
  'capurro/oreja/0': (id) => <Ear id={id} folds={0} />,
  'capurro/oreja/1': (id) => <Ear id={id} folds={1} />,
  'capurro/oreja/2': (id) => <Ear id={id} folds={2} />,
  'capurro/oreja/3': (id) => <Ear id={id} folds={3} />,
  'capurro/mama/0': (id) => <Gland id={id} r={0} />,
  'capurro/mama/1': (id) => <Gland id={id} r={4} label="< 5 mm" />,
  'capurro/mama/2': (id) => <Gland id={id} r={8} label="5–10 mm" />,
  'capurro/mama/3': (id) => <Gland id={id} r={12} label="> 10 mm" />,
  'capurro/pezon/0': (id) => <Nipple id={id} areola={0} stippled={false} raised={false} />,
  'capurro/pezon/1': (id) => (
    <Nipple id={id} areola={16} stippled={false} raised={false} size="< 7.5 mm" />
  ),
  'capurro/pezon/2': (id) => <Nipple id={id} areola={26} stippled raised={false} size="> 7.5 mm" />,
  'capurro/pezon/3': (id) => <Nipple id={id} areola={26} stippled raised size="> 7.5 mm" />,
  'capurro/piel/0': (id) => <Skin id={id} level={0} />,
  'capurro/piel/1': (id) => <Skin id={id} level={1} />,
  'capurro/piel/2': (id) => <Skin id={id} level={2} />,
  'capurro/piel/3': (id) => <Skin id={id} level={3} />,
  'capurro/piel/4': (id) => <Skin id={id} level={4} />,
  'capurro/pliegues/0': (id) => <Plantar id={id} marks={null} grooves={null} guide={null} />,
  'capurro/pliegues/1': (id) => (
    <Plantar id={id} marks={{ to: HALF, faint: true }} grooves={null} guide="half" />
  ),
  'capurro/pliegues/2': (id) => (
    <Plantar id={id} marks={{ to: HALF, faint: false }} grooves={THIRD} guide="third" />
  ),
  'capurro/pliegues/3': (id) => <Plantar id={id} marks={null} grooves={HALF} guide="half" />,
  'capurro/pliegues/4': (id) => <Plantar id={id} marks={null} grooves={124} guide="half" />,
  'silverman-andersen/movimientos/0': (id) => <Movement id={id} chest="up" />,
  'silverman-andersen/movimientos/1': (id) => <Movement id={id} chest="still" />,
  'silverman-andersen/movimientos/2': (id) => <Movement id={id} chest="down" />,
  'silverman-andersen/tiraje/0': (id) => <Ribs id={id} level={0} />,
  'silverman-andersen/tiraje/1': (id) => <Ribs id={id} level={1} />,
  'silverman-andersen/tiraje/2': (id) => <Ribs id={id} level={2} />,
  'silverman-andersen/xifoidea/0': (id) => <Xiphoid id={id} level={0} />,
  'silverman-andersen/xifoidea/1': (id) => <Xiphoid id={id} level={1} />,
  'silverman-andersen/xifoidea/2': (id) => <Xiphoid id={id} level={2} />,
  'silverman-andersen/aleteo/0': (id) => <Nose id={id} level={0} />,
  'silverman-andersen/aleteo/1': (id) => <Nose id={id} level={1} />,
  'silverman-andersen/aleteo/2': (id) => <Nose id={id} level={2} />,
  'silverman-andersen/quejido/0': (id) => <Grunt id={id} level={0} />,
  'silverman-andersen/quejido/1': (id) => <Grunt id={id} level={1} />,
  'silverman-andersen/quejido/2': (id) => <Grunt id={id} level={2} />,
};

/**
 * Marcas vectoriales sobre una foto: medidas o movimientos que la imagen sola no muestra.
 * Lienzo de 160 × 106.667 (3:2, como las fotos); fondo transparente.
 */
/** Pezones en la foto del tórax (coordenadas del lienzo, tras el recorte de 3:2). */
const NIPPLES: [number, number][] = [
  [44.8, 54.2],
  [115.6, 53.7],
];

function GlandMarks({ r, label }: { r: number; label: string }) {
  return (
    <G>
      {NIPPLES.map(([cx, cy]) => (
        <Circle
          key={cx}
          cx={cx}
          cy={cy}
          r={r}
          fill={K.mark}
          fillOpacity={0.16}
          stroke={K.mark}
          strokeWidth={1.2}
          strokeDasharray="2.5 1.8"
        />
      ))}
      <Rect x={58} y={70} width={44} height={15} rx={7.5} fill={K.white} opacity={0.92} />
      <SvgText
        x={80}
        y={81}
        fontSize={10}
        fontFamily={family.bold}
        fill={K.mark}
        textAnchor="middle"
      >
        {label}
      </SvgText>
    </G>
  );
}

const OVERLAYS: Record<string, () => ReactNode> = {
  'capurro/mama/0': () => <GlandMarks r={0} label="no palpable" />,
  'capurro/mama/1': () => <GlandMarks r={4} label="< 5 mm" />,
  'capurro/mama/2': () => <GlandMarks r={7} label="5–10 mm" />,
  'capurro/mama/3': () => <GlandMarks r={10.5} label="> 10 mm" />,
};

const has = (k: string) => k in PHOTOS || k in ART;

/** ¿Este criterio tiene ilustración para todas sus opciones? */
export function hasScoreArt(scoreId: string, itemId: string, count: number): boolean {
  return Array.from({ length: count }, (_, i) => `${scoreId}/${itemId}/${i}`).every(has);
}

/** Ilustración de la opción `index` del criterio, o null si no hay. */
export function ScoreArt({
  scoreId,
  itemId,
  index,
}: {
  scoreId: string;
  itemId: string;
  index: number;
}) {
  const key = `${scoreId}/${itemId}/${index}`;
  const photo = PHOTOS[key];
  if (photo) {
    const overlay = OVERLAYS[key];
    return (
      <View style={styles.fill}>
        <Image
          source={photo}
          style={styles.fill}
          resizeMode="cover"
          accessibilityIgnoresInvertColors
        />
        {overlay ? (
          <Svg
            viewBox="0 0 160 106.667"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            style={StyleSheet.absoluteFill}
          >
            {overlay()}
          </Svg>
        ) : null}
      </View>
    );
  }
  const draw = ART[key];
  return draw ? <>{draw(key.replace(/[^a-z0-9]/gi, '-'))}</> : null;
}

const styles = StyleSheet.create({ fill: { width: '100%', height: '100%' } });
