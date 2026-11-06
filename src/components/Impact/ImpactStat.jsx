import { useState } from 'react'
import treeIcon from '../../assets/tree.png'
import leafIcon from '../../assets/logo.png'
import userIcon from '../../assets/user.png'
import { ButterflyIcon } from '../../icons'

const ImpactStat = ({ stat, isLast }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { number, label, iconType } = stat

  const renderIcon = () => {
    switch (iconType) {
      case 'tree':
        return (
          <img
            src={treeIcon}
            alt=""
            aria-hidden="true"
            className="h-8 sm:h-9 w-auto brightness-0 invert object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 select-none"
          />
        )
      case 'sprout':
        return (
          <img
            src={leafIcon}
            alt=""
            aria-hidden="true"
            className="h-8 sm:h-9 w-auto brightness-0 invert object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 select-none"
          />
        )
      case 'butterfly':
        return (
          <ButterflyIcon
            isHovered={isHovered}
            size={34}
            className="text-white drop-shadow-sm"
          />
        )
      case 'visitors':
        return (
          <img
            src={userIcon}
            alt=""
            aria-hidden="true"
            className="h-8 sm:h-9 w-auto brightness-0 invert object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 select-none"
          />
        )
      default:
        return null
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex flex-col items-center text-center px-4 sm:px-6 py-4 sm:py-6 transition-colors duration-200 ${
        isLast ? '' : 'sm:border-r border-white/20'
      }`}
    >
      <div className="h-10 sm:h-12 flex items-center justify-center mb-2">
        {renderIcon()}
      </div>

      <span className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-none drop-shadow-md transition-transform duration-300 group-hover:scale-105">
        {number}
      </span>

      <span className="mt-2 text-xs sm:text-[13.5px] font-medium text-white/90 tracking-wide uppercase drop-shadow-sm">
        {label}
      </span>
    </div>
  )
}

export default ImpactStat

