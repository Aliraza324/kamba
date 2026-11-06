const FeatureCard = ({ icon, title, description, isLast }) => {
  return (
    <div
      className={`group flex flex-col items-center text-center px-4 sm:px-6 py-6 sm:py-8 transition-colors duration-200 ${
        isLast ? '' : 'lg:border-r border-[#e5dfd2]'
      }`}
    >
      <div className="h-10 flex items-center justify-center mb-3">
        <img
          src={icon}
          alt={title}
          className="h-9 w-auto max-w-[48px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 drop-shadow-sm select-none"
        />
      </div>

      <h3 className="font-sans font-bold text-[17px] sm:text-[18px] text-[#1b2419] tracking-tight">
        {title}
      </h3>

      <p className="mt-1.5 text-[13.5px] sm:text-[14px] text-[#556352] leading-relaxed max-w-[220px] mx-auto font-normal">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard

