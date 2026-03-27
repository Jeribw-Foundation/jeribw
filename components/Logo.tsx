export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="JERIBW logo"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeWidth="8">
        <circle
          cx="60"
          cy="60"
          r="48"
          strokeLinecap="round"
          strokeDasharray="260 40"
          strokeDashoffset="20"
        />
      </g>

      <text
        x="130"
        y="72"
        fontSize="40"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        letterSpacing="6"
        fill="currentColor"
      >
        JERIBW
      </text>
    </svg>
  );
}