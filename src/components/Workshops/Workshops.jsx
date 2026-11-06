import { useState } from 'react'
import { Link } from 'react-router'
import plantImg from '../../assets/plant.jpg'
import { workshopsData } from '../../mockup/workshops'
import { ArrowRightIcon } from '../../icons'

const Workshops = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false)
  const { tag, titleLine1, titleLine2, description, cta, alt } = workshopsData

  return (
    <section className="w-full bg-[#fff] py-10 sm:py-14 lg:py-16 border-b border-[#ece7dc]/70 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="w-full lg:w-[42%] xl:w-[38%] space-y-4 sm:space-y-5 text-left flex-shrink-0 pl-2 sm:pl-6 lg:pl-8">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.22em] text-[#346b2b] uppercase">
              {tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1b2419] tracking-tight leading-[1.14]">
              <span>{titleLine1}</span>
              <br />
              <span>{titleLine2}</span>
            </h2>

            <p className="text-base sm:text-[16.5px] text-[#4d5a4a] leading-relaxed max-w-md font-normal">
              {description}
            </p>

            <div className="pt-2">
              <Link
                to={cta.href}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                className="group inline-flex items-center gap-2.5 rounded-full border border-[#346b2b] hover:bg-[#346b2b] text-[#346b2b] hover:text-white font-medium text-sm sm:text-[15px] px-7 py-3 transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#346b2b]"
              >
                <span>{cta.label}</span>
                <ArrowRightIcon
                  isHovered={isBtnHovered}
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[58%] xl:w-[62%] flex justify-end items-center">
            <img
              src={plantImg}
              alt={alt}
              className="w-full max-w-[860px] xl:max-w-[940px] 2xl:max-w-[1020px] h-auto object-contain select-none transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workshops
