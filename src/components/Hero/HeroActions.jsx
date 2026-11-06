import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRightIcon } from '../../icons'

const HeroActions = ({ primaryAction, secondaryAction }) => {
  const [isPrimaryHovered, setIsPrimaryHovered] = useState(false)

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-3">
      <Link
        to={primaryAction.href}
        onMouseEnter={() => setIsPrimaryHovered(true)}
        onMouseLeave={() => setIsPrimaryHovered(false)}
        className="group inline-flex items-center gap-2.5 rounded-full bg-[#4c772d] hover:bg-[#3f6324] text-white font-medium text-[15px] sm:text-base px-7 py-3 sm:py-3.5 transition-all duration-300 shadow-md hover:shadow-xl ring-1 ring-white/60 hover:ring-white active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
      >
        <span>{primaryAction.label}</span>
        <ArrowRightIcon
          isHovered={isPrimaryHovered}
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      <Link
        to={secondaryAction.href}
        className="inline-flex items-center justify-center rounded-full border border-white/80 hover:border-white text-white hover:bg-white/15 backdrop-blur-[2px] font-medium text-[15px] sm:text-base px-7 py-3 sm:py-3.5 transition-all duration-300 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
      >
        {secondaryAction.label}
      </Link>
    </div>
  )
}

export default HeroActions

