export default function Logo({ isDark }: { isDark?: boolean }) {
  const color = isDark ? "#C6A75E" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 320 120"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="JERIBW logo"
      className="h-14 w-auto"
    >
      <circle
        cx="60"
        cy="60"
        r="48"
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="260 40"
        strokeDashoffset="20"
      />

      <text
        x="130"
        y="72"
        fontSize="40"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        letterSpacing="6"
        fill={color}
      >
        JERIBW
      </text>
    </svg>
  );
}