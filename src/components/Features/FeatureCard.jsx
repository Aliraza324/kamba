const FeatureCard = ({ icon, title, description, index, total }) => {
  const isRightColMobile = index % 2 === 1
  const isTopRowMobile = index < 2
  const isLastDesktop = index === total - 1

  return (
    <div
      className={`group flex flex-col items-center text-center px-2 sm:px-6 py-5 sm:py-8 transition-colors duration-200 ${
        isRightColMobile ? '' : 'border-r border-[#e5dfd2]/80'
      } ${
        isTopRowMobile ? 'border-b lg:border-b-0 border-[#e5dfd2]/80' : ''
      } ${
        isLastDesktop ? 'lg:border-r-0' : 'lg:border-r border-[#e5dfd2]/80'
      }`}
    >
      <div className="h-9 sm:h-10 flex items-center justify-center mb-2.5">
        <img
          src={icon}
          alt={title}
          className="h-7 sm:h-9 w-auto max-w-[42px] sm:max-w-[48px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-sm select-none"
        />
      </div>

      <h3 className="font-sans font-bold text-[14.5px] sm:text-[18px] text-[#1b2419] tracking-tight leading-snug">
        {title}
      </h3>

      <p className="mt-1 text-[12px] sm:text-[14px] text-[#556352] leading-relaxed max-w-[170px] sm:max-w-[220px] mx-auto font-normal">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
