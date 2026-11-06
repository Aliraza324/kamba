import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import { CartIcon } from '../../icons'

const MobileMenu = ({ isOpen, links, cart, cta, onClose }) => {
  const [isCartHovered, setIsCartHovered] = useState(false)

  if (!isOpen) return null

  return (
    <div className="lg:hidden border-t border-[#ece8df] bg-[#fcfbf9] px-4 pt-4 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="flex flex-col gap-3">
        {links.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              `text-base font-medium px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[#346b2b]/10 text-[#346b2b] font-semibold'
                  : 'text-[#222a20] hover:bg-black/5 hover:text-[#346b2b]'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-[#ece8df] flex items-center justify-between gap-4">
        <Link
          to={cart.href}
          onClick={onClose}
          aria-label={cart.ariaLabel}
          onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
          className="relative inline-flex items-center gap-3 px-3 py-2 rounded-lg text-[#1a2618] hover:bg-black/5 transition-colors"
        >
          <div className="relative">
            <CartIcon isHovered={isCartHovered} size={24} className="text-[#1a2618]" />
            <span className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 bg-[#346b2b] text-white text-[10px] font-semibold rounded-full flex items-center justify-center">
              {cart.count}
            </span>
          </div>
          <span className="text-sm font-medium">Cart</span>
        </Link>

        <Link
          to={cta.href}
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-full bg-[#346b2b] hover:bg-[#295721] text-white font-medium text-sm px-5 py-2.5 transition-all duration-200 shadow-sm"
        >
          {cta.label}
        </Link>
      </div>
    </div>
  )
}

export default MobileMenu

