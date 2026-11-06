const ButterflyIcon = ({ isHovered, size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-300 ${
        isHovered ? 'scale-110 -translate-y-1' : ''
      } ${className}`}
    >
      <path d="M16 8v16" />
      <path d="M14 6c0-1.5 2-2 2-2s2 .5 2 2" />
      <path d="M16 11c-3-5-11-5-12 1-1 5 3 9 12 7" />
      <path d="M16 19c-3 4-8 5-9 1-1-4 3-5 9-2" />
      <path d="M16 11c3-5 11-5 12 1 1 5-3 9-12 7" />
      <path d="M16 19c3 4 8 5 9 1 1-4-3-5-9-2" />
    </svg>
  )
}

export default ButterflyIcon

