import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Story } from '../components/Story'
import { Experiences } from '../components/Experiences'
import { PromoCards } from '../components/PromoCards'
import { Workshops } from '../components/Workshops'
import { Impact } from '../components/Impact'
import { Newsletter } from '../components/Newsletter'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Story />
      <Experiences />
      <PromoCards />
      <Workshops />
      <Impact />
      <Newsletter />
    </>
  )
}

export default HomePage
