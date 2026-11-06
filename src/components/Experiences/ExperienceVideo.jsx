import { useState } from 'react'
import treeImg from '../../assets/tree.jpg'
import { PlayIcon } from '../../icons'

const ExperienceVideo = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] max-w-[620px] mx-auto cursor-pointer"
    >
      <img
        src={treeImg}
        alt="Farm visits and guided tours at Kamba Farm"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
      />

      <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />

      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          aria-label="Play video about farm experiences"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 text-[#21561a] hover:bg-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/80 pl-0.5"
        >
          <PlayIcon
            isHovered={isHovered}
            size={24}
            className="text-[#21561a] fill-[#21561a]"
          />
        </button>
      </div>
    </div>
  )
}

export default ExperienceVideo

