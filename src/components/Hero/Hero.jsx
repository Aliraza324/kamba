import heroBg from '../../assets/heroBg.jpg'
import { heroData } from '../../mockup/hero'
import HeroActions from './HeroActions'

const Hero = () => {
  const { tagline, titlePart1, titlePart2, description, primaryAction, secondaryAction } =
    heroData

  return (
    <section className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px] flex items-center bg-[#fbf9f4]">
      <img
        src={heroBg}
        alt="Kamba Farm landscape"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 w-full">
        <div className="max-w-2xl text-left space-y-4 sm:space-y-5">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] text-white/90 uppercase drop-shadow-sm">
            {tagline}
          </p>

          <h1 className="font-serif text-3.5xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-white tracking-tight leading-[1.08] drop-shadow-md">
            <span>{titlePart1}</span>
            <br />
            <span>{titlePart2}</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/95 font-normal leading-relaxed max-w-xl drop-shadow-sm pt-1">
            {description}
          </p>

          <HeroActions
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

