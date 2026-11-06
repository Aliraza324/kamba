import getBg from '../../assets/get.jpg'
import { impactData } from '../../mockup/impact'
import ImpactStat from './ImpactStat'

const Impact = () => {
  const { tag, titleLine1, titleLine2, stats } = impactData

  return (
    <section className="relative w-full overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[340px] flex items-center bg-[#1b2b1a]">
      <img
        src={getBg}
        alt="Lush green agroforestry hills at Kamba Farm"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />

      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-[38%] xl:w-[35%] space-y-2 sm:space-y-3 text-center lg:text-left flex-shrink-0">
            <span className="inline-block text-xs sm:text-sm font-bold tracking-[0.22em] text-white/90 uppercase drop-shadow-sm">
              {tag}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.12] drop-shadow-md">
              <span>{titleLine1}</span>
              <br />
              <span>{titleLine2}</span>
            </h2>
          </div>

          <div className="w-full lg:w-[62%] xl:w-[65%]">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-white/15">
              {stats.map((stat, index) => (
                <ImpactStat
                  key={stat.id}
                  stat={stat}
                  isLast={index === stats.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact

