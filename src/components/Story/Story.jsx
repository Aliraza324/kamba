import { useState } from 'react'
import { Link } from 'react-router'
import leafImg from '../../assets/leaf.png'
import greenImg from '../../assets/green.jpg'
import { storyData } from '../../mockup/story'
import { ArrowRightIcon } from '../../icons'

const Story = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false)
  const { tag, titlePart1, titlePart2, description, cta } = storyData

  return (
    <section className="relative w-full overflow-hidden bg-[#faf8f2] py-8 sm:py-12 lg:py-14 border-b border-[#ece7dc]/70">
      <img
        src={leafImg}
        alt=""
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 h-full w-auto max-w-[240px] sm:max-w-[320px] lg:max-w-[400px] object-cover object-left opacity-90 pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="w-full lg:w-[42%] xl:w-[40%] flex-shrink-0 pl-2 sm:pl-8 lg:pl-12 xl:pl-14 space-y-4 sm:space-y-5 text-left">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.22em] text-[#346b2b] uppercase">
              {tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-bold text-[#1b2419] tracking-tight leading-[1.14]">
              <span>{titlePart1}</span>
              <br />
              <span>{titlePart2}</span>
            </h2>

            <p className="text-base sm:text-[16.5px] xl:text-[17px] text-[#4d5a4a] leading-relaxed max-w-lg font-normal">
              {description}
            </p>

            <div className="pt-2">
              <Link
                to={cta.href}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                className="group inline-flex items-center gap-2.5 rounded-full border-2 border-[#346b2b] hover:bg-[#346b2b] text-[#346b2b] hover:text-white font-medium text-[15px] sm:text-base px-7 py-3 transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#346b2b]"
              >
                <span>{cta.label}</span>
                <ArrowRightIcon
                  isHovered={isBtnHovered}
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[58%] xl:w-[60%] flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[780px] xl:max-w-[860px] 2xl:max-w-[920px]">
              <img
                src={greenImg}
                alt="Agroforestry landscape at Kamba Farm"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.015] select-none pointer-events-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
