import { useState } from 'react'
import { Link } from 'react-router'
import { experiencesData } from '../../mockup/experiences'
import ExperienceVideo from './ExperienceVideo'
import ExperienceFeatures from './ExperienceFeatures'
import { ArrowRightIcon } from '../../icons'

const Experiences = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false)
  const { tag, title, description, features, cta } = experiencesData

  return (
    <section className="w-full bg-[#fcfbf9] py-14 sm:py-20 lg:py-24 border-b border-[#ece7dc]/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          <div className="lg:col-span-6 w-full flex justify-center">
            <ExperienceVideo />
          </div>

          <div className="lg:col-span-6 w-full space-y-4 sm:space-y-6 text-left">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.22em] text-[#346b2b] uppercase">
              {tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-[#1b2419] tracking-tight leading-[1.14]">
              {title}
            </h2>

            <p className="text-base sm:text-[17px] text-[#4d5a4a] leading-relaxed max-w-xl font-normal">
              {description}
            </p>

            <ExperienceFeatures features={features} />

            <div className="pt-2">
              <Link
                to={cta.href}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#1c4d18] hover:bg-[#265e21] text-white font-medium text-[15px] sm:text-base px-8 py-3.5 transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1c4d18]"
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
        </div>
      </div>
    </section>
  )
}

export default Experiences

