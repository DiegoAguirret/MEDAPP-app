import { useMemo, useState } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line, Polyline, Text as SvgText } from 'react-native-svg';
import { chartAxis, chartDomain, sdLines, type Sex, type TableId } from '../domain/growth/growth';
import { family, useColors } from './theme';

const KS = [-3, -2, 0, 2, 3] as const;
const HEIGHT = 220;
const PAD = { left: 34, right: 26, top: 10, bottom: 26 };

/** Eje x en las unidades que lee el clínico: años para la edad, centímetros para la talla. */
function toDisplay(table: TableId, x: number): number {
  const axis = chartAxis(table);
  if (axis === 'days') return x / 365.25;
  if (axis === 'months') return x / 12;
  return x;
}

function niceStep(span: number, target: number): number {
  const raw = span / target;
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * pow;
}

/**
 * Curva de referencia OMS con las líneas de −3, −2, 0, +2 y +3 DE y el punto del paciente.
 */
export function GrowthChart({
  table,
  sex,
  x,
  y,
  label,
  unit,
}: {
  table: TableId;
  sex: Sex;
  x: number;
  y: number;
  label: string;
  unit: string;
}) {
  const c = useColors();
  const [width, setWidth] = useState(0);
  const lines = useMemo(() => sdLines(table, sex, KS), [table, sex]);
  const { from, to } = chartDomain(table);
  const xMin = toDisplay(table, from);
  const xMax = toDisplay(table, to);
  const all = lines.flatMap((l) => l.points.map((p) => p.y)).concat(y);
  const yMin = Math.floor(Math.min(...all) * 0.95);
  const yMax = Math.ceil(Math.max(...all) * 1.02);
  const plotW = Math.max(width - PAD.left - PAD.right, 1);
  const plotH = HEIGHT - PAD.top - PAD.bottom;
  const sx = (v: number) => PAD.left + ((v - xMin) / (xMax - xMin)) * plotW;
  const sy = (v: number) => PAD.top + (1 - (v - yMin) / (yMax - yMin)) * plotH;

  const xStep = chartAxis(table) === 'cm' ? 10 : niceStep(xMax - xMin, 5);
  const xTicks: number[] = [];
  for (let t = Math.ceil(xMin / xStep) * xStep; t <= xMax + 1e-9; t += xStep) xTicks.push(t);
  const yStep = niceStep(yMax - yMin, 4);
  const yTicks: number[] = [];
  for (let t = Math.ceil(yMin / yStep) * yStep; t <= yMax + 1e-9; t += yStep) yTicks.push(t);

  const stroke = (k: number) => (k === 0 ? c.ok : Math.abs(k) === 2 ? c.warning : c.danger);
  const px = sx(toDisplay(table, x));
  const py = sy(y);
  const xUnit = chartAxis(table) === 'cm' ? 'cm' : 'años';
  const lastPoint = (k: number) => {
    const pts = lines.find((l) => l.k === k)?.points ?? [];
    return pts[pts.length - 1];
  };

  return (
    <View
      accessible
      accessibilityLabel={`Curva de ${label.toLowerCase()} con líneas de −3 a +3 desviaciones estándar y el punto del paciente`}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
      style={{ height: HEIGHT }}
    >
      {width > 0 ? (
        <Svg width={width} height={HEIGHT}>
          {yTicks.map((t) => (
            <Line
              key={`y${t}`}
              x1={PAD.left}
              x2={PAD.left + plotW}
              y1={sy(t)}
              y2={sy(t)}
              stroke={c.border}
              strokeWidth={0.5}
            />
          ))}
          {yTicks.map((t) => (
            <SvgText
              key={`yl${t}`}
              x={PAD.left - 6}
              y={sy(t) + 4}
              fontSize={10}
              fontFamily={family.regular}
              fill={c.muted}
              textAnchor="end"
            >
              {Number(t.toFixed(2))}
            </SvgText>
          ))}
          {xTicks.map((t) => (
            <SvgText
              key={`xl${t}`}
              x={sx(t)}
              y={HEIGHT - 8}
              fontSize={10}
              fontFamily={family.regular}
              fill={c.muted}
              textAnchor="middle"
            >
              {Number(t.toFixed(1))}
            </SvgText>
          ))}
          <SvgText
            x={PAD.left + plotW}
            y={HEIGHT - 8}
            fontSize={10}
            fontFamily={family.medium}
            fill={c.muted}
            textAnchor="end"
          >
            {xUnit}
          </SvgText>
          <SvgText x={2} y={PAD.top + 2} fontSize={10} fontFamily={family.medium} fill={c.muted}>
            {unit}
          </SvgText>
          {lines.map((l) => (
            <Polyline
              key={l.k}
              points={l.points.map((p) => `${sx(toDisplay(table, p.x))},${sy(p.y)}`).join(' ')}
              fill="none"
              stroke={stroke(l.k)}
              strokeWidth={l.k === 0 ? 2 : 1.25}
              strokeDasharray={Math.abs(l.k) === 3 ? '4 3' : undefined}
            />
          ))}
          {KS.map((k) => {
            const p = lastPoint(k);
            if (!p) return null;
            return (
              <SvgText
                key={`k${k}`}
                x={sx(toDisplay(table, p.x)) + 3}
                y={sy(p.y) + 3}
                fontSize={9}
                fontFamily={family.bold}
                fill={stroke(k)}
              >
                {k > 0 ? `+${k}` : k}
              </SvgText>
            );
          })}
          <Line
            x1={px}
            x2={px}
            y1={PAD.top}
            y2={PAD.top + plotH}
            stroke={c.accent}
            strokeWidth={0.75}
            strokeDasharray="2 3"
          />
          <Circle cx={px} cy={py} r={6} fill={c.accent} stroke={c.surface} strokeWidth={2} />
        </Svg>
      ) : null}
    </View>
  );
}
