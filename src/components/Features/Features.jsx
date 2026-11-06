import logoIcon from '../../assets/logo.png'
import basketIcon from '../../assets/backet.png'
import userIcon from '../../assets/user.png'
import bedIcon from '../../assets/bed.png'
import { featuresData } from '../../mockup/features'
import FeatureCard from './FeatureCard'

const iconMap = {
  logo: logoIcon,
  basket: basketIcon,
  user: userIcon,
  bed: bedIcon
}

const Features = () => {
  return (
    <section className="w-full bg-[#F5F2ED] border-b border-[#ece7dc]/70 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e5dfd2]/80">
          {featuresData.map((item, index) => (
            <FeatureCard
              key={item.id}
              icon={iconMap[item.iconKey]}
              title={item.title}
              description={item.description}
              isLast={index === featuresData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

