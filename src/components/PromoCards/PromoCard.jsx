import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRightIcon } from '../../icons'

const PromoCard = ({ data, bgImage }) => {
  const [isBtnHovered, setIsBtnHovered] = useState(false)
  const { tag, titleLine1, titleLine2, description, cta, alt } = data

  return (
    <div className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] flex flex-col justify-between p-7 sm:p-9 lg:p-11 transition-all duration-300 hover:shadow-2xl">
      <img
        src={bgImage}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 pointer-events-none" />

      <div className="relative z-10 space-y-3 sm:space-y-4 text-left">
        <span className="inline-block text-xs font-bold tracking-[0.22em] text-white/90 uppercase drop-shadow-sm">
          {tag}
        </span>

        <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.12] drop-shadow-md">
          <span>{titleLine1}</span>
          <br />
          <span>{titleLine2}</span>
        </h3>

        <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-[260px] drop-shadow-sm font-normal">
          {description}
        </p>
      </div>

      <div className="relative z-10 pt-6">
        <Link
          to={cta.href}
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          className="inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-white/95 text-[#1b2419] font-medium text-sm sm:text-[15px] px-6 sm:px-7 py-3 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
        >
          <span>{cta.label}</span>
          <ArrowRightIcon
            isHovered={isBtnHovered}
            size={17}
            className="text-[#1b2419] transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  )
}

export default PromoCard

