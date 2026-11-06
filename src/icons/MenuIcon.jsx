import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { MenuIcon as LucideMenuIcon } from 'lucide-animated'

const MenuIcon = forwardRef(({ isHovered, size = 26, className = '', ...props }, ref) => {
  const innerRef = useRef(null)

  useImperativeHandle(ref, () => ({
    startAnimation: () => innerRef.current?.startAnimation?.(),
    stopAnimation: () => innerRef.current?.stopAnimation?.()
  }))

  useEffect(() => {
    if (isHovered === undefined) return
    if (isHovered) {
      innerRef.current?.startAnimation?.()
    } else {
      innerRef.current?.stopAnimation?.()
    }
  }, [isHovered])

  return (
    <LucideMenuIcon
      ref={innerRef}
      size={size}
      className={className}
      animateOnHover={false}
      {...props}
    />
  )
})

MenuIcon.displayName = 'MenuIcon'

export default MenuIcon

