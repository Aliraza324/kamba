import { Link } from 'react-router'

const HomePage = () => {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#346b2b] bg-[#346b2b]/10 mb-6">
          Regenerative Agroforestry
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a2618] max-w-4xl mx-auto leading-[1.1]">
          Cultivating Harmony With Nature & Soil
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a6857] max-w-2xl mx-auto leading-relaxed">
          Welcome to Kamba Farm — pioneering regenerative agriculture, bio-diverse ecosystems, and immersive farm experiences.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/book-a-visit"
            className="rounded-full bg-[#346b2b] hover:bg-[#295721] text-white font-medium text-base px-8 py-3.5 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Plan Your Visit
          </Link>
          <Link
            to="/our-story"
            className="rounded-full border border-[#d8d3c5] hover:border-[#346b2b] text-[#1a2618] hover:text-[#346b2b] font-medium text-base px-8 py-3.5 transition-all bg-white/70"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePage

