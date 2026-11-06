import { useState } from 'react'
import { navigationData } from '../../mockup/navigation'
import NavbarBrand from './NavbarBrand'
import NavLinks from './NavLinks'
import NavActions from './NavActions'
import MobileMenu from './MobileMenu'
import { MenuIcon, XIcon } from '../../icons'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isToggleHovered, setIsToggleHovered] = useState(false)

  const { brand, links, cart, cta } = navigationData

  const handleToggle = () => {
    setIsMobileOpen((prev) => !prev)
    setIsToggleHovered(false)
  }

  const handleClose = () => {
    setIsMobileOpen(false)
    setIsToggleHovered(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#ffffff] border-b border-[#ece8df]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          <NavbarBrand brand={brand} />

          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <NavLinks links={links} />
          </div>

          <div className="hidden lg:flex items-center">
            <NavActions cart={cart} cta={cta} />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 lg:hidden">
            <NavActions cart={cart} cta={cta} />

            <button
              type="button"
              onClick={handleToggle}
              onMouseEnter={() => setIsToggleHovered(true)}
              onMouseLeave={() => setIsToggleHovered(false)}
              aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileOpen}
              className="p-1.5 sm:p-2 rounded-lg text-[#1a2618] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#346b2b] transition-colors flex-shrink-0 cursor-pointer"
            >
              {isMobileOpen ? (
                <XIcon isHovered={isToggleHovered} size={22} />
              ) : (
                <MenuIcon isHovered={isToggleHovered} size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileOpen}
        links={links}
        cart={cart}
        cta={cta}
        onClose={handleClose}
      />
    </header>
  )
}

export default Navbar
