import type { ReactNode } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Svg, { Circle, G, Path, Rect, Text as SvgText } from 'react-native-svg';
import { family } from '../theme';
import { PHOTOS } from './photos';

/**
 * Ilustraciones de las opciones de las escalas neonatales: fotos pintadas (`photos.ts`) y, encima,
 * marcas vectoriales para lo que la imagen sola no muestra (medidas, movimientos, sonido). Cada
 * imagen muestra solo lo que dice el texto de su opción; no agrega criterios.
 */

/** Marcas en el cian de la app y pastillas blancas; no cambian con el tema (van sobre la foto). */
const K = {
  mark: '#0E7490',
  white: '#FFFFFF',
} as const;

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

/** Pastilla blanca con texto, legible sobre la foto. */
function Tag({ x, y, children }: { x: number; y: number; children: string }) {
  const w = children.length * 5.4 + 10;
  return (
    <G>
      <Rect x={x - w / 2} y={y - 10} width={w} height={14} rx={7} fill={K.white} opacity={0.92} />
      <SvgText
        x={x}
        y={y + 0.5}
        fontSize={9.5}
        fontFamily={family.bold}
        fill={K.mark}
        textAnchor="middle"
      >
        {children}
      </SvgText>
    </G>
  );
}

/** Tórax y abdomen en la foto del recién nacido de perfil (lienzo 160 × 106.667). */
const CHEST_X = 60;
const BELLY_X = 86;

function MovementMarks({ chest }: { chest: 'up' | 'still' | 'down' }) {
  return (
    <G>
      {chest === 'still' ? (
        <Path
          d={`M${CHEST_X - 8} 30 L${CHEST_X + 8} 30`}
          stroke={K.mark}
          strokeWidth={3}
          strokeLinecap="round"
        />
      ) : (
        <Arrow x={CHEST_X} y={40} up={chest === 'up'} />
      )}
      <Arrow x={BELLY_X} y={33} up />
      <Tag x={CHEST_X - 8} y={92}>
        tórax
      </Tag>
      <Tag x={BELLY_X + 20} y={92}>
        abdomen
      </Tag>
    </G>
  );
}

/** Ondas del quejido junto a la boca (foto de la cara con gesto de esfuerzo). */
function GruntMarks({ waves }: { waves: 1 | 3 }) {
  const arcs = waves === 1 ? [0] : [0, 9, 18];
  return (
    <G>
      {arcs.map((d) => (
        <Path
          key={d}
          d={`M${91 + d} ${68 - d * 0.6} q${6 + d * 0.3} ${8 + d * 0.6} 0 ${16 + d * 1.2}`}
          fill="none"
          stroke={K.mark}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
      ))}
    </G>
  );
}

const OVERLAYS: Record<string, () => ReactNode> = {
  'silverman-andersen/movimientos/0': () => <MovementMarks chest="up" />,
  'silverman-andersen/movimientos/1': () => <MovementMarks chest="still" />,
  'silverman-andersen/movimientos/2': () => <MovementMarks chest="down" />,
  'silverman-andersen/quejido/1': () => <GruntMarks waves={1} />,
  'silverman-andersen/quejido/2': () => <GruntMarks waves={3} />,
  'capurro/mama/0': () => <GlandMarks r={0} label="no palpable" />,
  'capurro/mama/1': () => <GlandMarks r={4} label="< 5 mm" />,
  'capurro/mama/2': () => <GlandMarks r={7} label="5–10 mm" />,
  'capurro/mama/3': () => <GlandMarks r={10.5} label="> 10 mm" />,
};

const has = (k: string) => k in PHOTOS;

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
  return null;
}

const styles = StyleSheet.create({ fill: { width: '100%', height: '100%' } });
