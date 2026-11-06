import { useState } from 'react'
import logoIcon from '../../assets/logo.png'
import { newsletterData } from '../../mockup/newsletter'
import { MailIcon, ArrowRightIcon } from '../../icons'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isBtnHovered, setIsBtnHovered] = useState(false)
  const [isInputHovered, setIsInputHovered] = useState(false)
  const { title, description, placeholder, buttonLabel } = newsletterData

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setEmail('')
  }

  return (
    <section className="w-full bg-[#fbf9f4] py-8 sm:py-10 lg:py-12 border-b border-[#ece7dc]/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <div className="flex items-center gap-4 sm:gap-5 text-left">
            <img
              src={logoIcon}
              alt=""
              aria-hidden="true"
              className="h-10 sm:h-12 w-auto object-contain flex-shrink-0 select-none"
            />
            <div>
              <h2 className="font-serif text-2xl sm:text-[26px] font-bold text-[#1b2419] tracking-tight leading-tight">
                {title}
              </h2>
              <p className="text-xs sm:text-[14px] text-[#556352] mt-0.5 leading-snug">
                {description}
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            onMouseEnter={() => setIsInputHovered(true)}
            onMouseLeave={() => setIsInputHovered(false)}
            className="w-full max-w-md lg:max-w-lg bg-white rounded-full p-1.5 shadow-sm border border-[#e5dfd2] flex items-center transition-all duration-300 focus-within:ring-2 focus-within:ring-[#346b2b]/30 focus-within:border-[#346b2b]"
          >
            <div className="pl-3.5 pr-2 text-[#8a9686] flex items-center justify-center">
              <MailIcon isHovered={isInputHovered} size={18} />
            </div>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent border-none text-sm text-[#1b2419] placeholder:text-[#97a294] focus:outline-none focus:ring-0 py-2"
            />

            <button
              type="submit"
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
              className="rounded-full bg-[#346b2b] hover:bg-[#275320] text-white font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 inline-flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#346b2b]"
            >
              <span>{buttonLabel}</span>
              <ArrowRightIcon
                isHovered={isBtnHovered}
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter

