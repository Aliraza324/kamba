import { useState } from 'react'
import { Link } from 'react-router'
import { CartIcon } from '../../icons'

const NavActions = ({ cart, cta, onNavigate }) => {
  const [isCartHovered, setIsCartHovered] = useState(false)

  return (
    <div className="flex items-center gap-5 sm:gap-6">
      <Link
        to={cart.href}
        onClick={onNavigate}
        aria-label={cart.ariaLabel}
        onMouseEnter={() => setIsCartHovered(true)}
        onMouseLeave={() => setIsCartHovered(false)}
        className="relative p-2 rounded-full text-[#1a2618] hover:bg-black/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#346b2b]"
      >
        <CartIcon isHovered={isCartHovered} size={24} className="text-[#1a2618]" />
        <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-[#346b2b] text-white text-[11px] font-semibold rounded-full flex items-center justify-center ring-2 ring-[#fcfbf9]">
          {cart.count}
        </span>
      </Link>

      <Link
        to={cta.href}
        onClick={onNavigate}
        className="inline-flex items-center justify-center rounded-full bg-[#346b2b] hover:bg-[#295721] text-white font-medium text-[15px] px-6 py-2.5 transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#346b2b]"
      >
        {cta.label}
      </Link>
    </div>
  )
}

export default NavActions

