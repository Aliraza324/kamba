import { NavLink } from 'react-router'

const NavLinks = ({ links, onNavigate }) => {
  return (
    <nav className="flex items-center gap-7 lg:gap-8">
      {links.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          onClick={onNavigate}
          className={({ isActive }) =>
            `text-[15px] font-medium transition-colors duration-200 py-1 relative ${
              isActive
                ? 'text-[#346b2b] font-semibold'
                : 'text-[#222a20] hover:text-[#346b2b]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.label}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#346b2b] rounded-full" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavLinks

