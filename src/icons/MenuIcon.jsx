const MenuIcon = ({ isHovered, size = 24, className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-all duration-300 ${className}`}
      {...props}
    >
      <line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
        className={`transition-transform duration-300 ${
          isHovered ? 'translate-x-0.5' : ''
        }`}
      />
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
        className={`transition-transform duration-300 ${
          isHovered ? '-translate-x-0.5' : ''
        }`}
      />
      <line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
        className={`transition-transform duration-300 ${
          isHovered ? 'translate-x-0.5' : ''
        }`}
      />
    </svg>
  )
}

export default MenuIcon
