import treeIcon from '../../assets/tree.png'
import leafIcon from '../../assets/logo.png'
import userIcon from '../../assets/user.png'

const iconMap = {
  tree: treeIcon,
  logo: leafIcon,
  user: userIcon
}

const ExperienceFeatures = ({ features }) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-6 py-2">
      {features.map((item) => (
        <div
          key={item.id}
          className="group flex flex-col items-center text-center p-2 rounded-xl transition-all duration-300 hover:bg-black/[0.02]"
        >
          <div className="h-10 sm:h-12 flex items-center justify-center mb-2">
            <img
              src={iconMap[item.iconKey]}
              alt=""
              aria-hidden="true"
              className="h-8 sm:h-9 w-auto max-w-[44px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 select-none"
            />
          </div>
          <span className="font-sans font-bold text-[13px] sm:text-[14.5px] text-[#1b2419] leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ExperienceFeatures

