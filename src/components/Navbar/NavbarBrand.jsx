import { Link } from 'react-router'
import logo from '../../assets/logo.png'

const NavbarBrand = ({ brand }) => {
  return (
    <Link
      to={brand.href}
      className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#346b2b] rounded-md"
    >
      <img
        src={logo}
        alt={brand.logoAlt}
        className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col text-left">
        <span className="font-serif text-[22px] font-bold leading-tight tracking-tight text-[#1a2618]">
          {brand.name}
        </span>
        <span className="text-[11px] font-medium tracking-normal text-[#5a6857] leading-none mt-0.5">
          {brand.tagline}
        </span>
      </div>
    </Link>
  )
}

export default NavbarBrand

