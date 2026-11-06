import leftImg from '../../assets/left.jpg'
import rightImg from '../../assets/right.jpg'
import { promoCardsData } from '../../mockup/promoCards'
import PromoCard from './PromoCard'

const bgMap = {
  left: leftImg,
  right: rightImg
}

const PromoCards = () => {
  return (
    <section className="w-full bg-[#faf8f2] py-14 sm:py-20 lg:py-24 border-b border-[#ece7dc]/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {promoCardsData.map((card) => (
            <PromoCard
              key={card.id}
              data={card}
              bgImage={bgMap[card.bgKey]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoCards

