import { useId } from 'react';

// 水彩晕染：浅蓝有机模糊光晕，作为纸面柔光深度
interface Props {
  className?: string;
  seed?: number;
  /** 'blue'（默认浅蓝晕染）| 'white'（白色柔光晕染） */
  variant?: 'blue' | 'white';
}

export default function WatercolorWash({
  className,
  seed = 9,
  variant = 'blue',
}: Props) {
  const rawId = useId().replace(/:/g, '');
  const filterId = `wc-blur-${rawId}`;
  const palette =
    variant === 'white'
      ? [
          'hsl(0 0% 100% / 0.95)',
          'hsl(0 0% 100% / 0.85)',
          'hsl(210 40% 98% / 0.80)',
        ]
      : [
          'hsl(214 80% 62% / 0.55)',
          'hsl(185 78% 56% / 0.45)',
          'hsl(199 72% 64% / 0.40)',
        ];
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.014"
            numOctaves={2}
            seed={seed}
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="70" />
          <feGaussianBlur stdDeviation="34" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`}>
        <circle cx="230" cy="210" r="150" fill={palette[0]} />
        <circle cx="380" cy="250" r="125" fill={palette[1]} />
        <circle cx="300" cy="370" r="110" fill={palette[2]} />
      </g>
    </svg>
  );
}
