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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcfbf9]/95 backdrop-blur-md border-b border-[#ece8df]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavbarBrand brand={brand} />

          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <NavLinks links={links} />
          </div>

          <div className="hidden sm:flex items-center">
            <NavActions cart={cart} cta={cta} />
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <div className="sm:hidden">
              <NavActions cart={cart} cta={cta} />
            </div>

            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              onMouseEnter={() => setIsToggleHovered(true)}
              onMouseLeave={() => setIsToggleHovered(false)}
              aria-label={isMobileOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileOpen}
              className="p-2 rounded-lg text-[#1a2618] hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#346b2b] transition-colors"
            >
              {isMobileOpen ? (
                <XIcon isHovered={isToggleHovered} size={24} />
              ) : (
                <MenuIcon isHovered={isToggleHovered} size={24} />
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
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  )
}

export default Navbar

