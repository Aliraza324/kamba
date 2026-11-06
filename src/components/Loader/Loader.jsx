import logo from '../../assets/logo.png'
import { loaderData } from '../../mockup/loader'

const Loader = ({ fullScreen = true, text }) => {
  const { brandName, loadingText } = loaderData
  const displayMessage = text || loadingText

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#346b2b]/20 border-t-[#346b2b] animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt={brandName}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain animate-pulse select-none"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="font-serif text-lg font-bold text-[#1a2618] tracking-tight">
          {brandName}
        </span>
        <span className="text-xs text-[#556352] font-medium tracking-wider uppercase mt-1 animate-pulse">
          {displayMessage}
        </span>
      </div>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fbf9f4]/95 backdrop-blur-sm transition-opacity duration-300">
        {content}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-12">
      {content}
    </div>
  )
}

export default Loader

