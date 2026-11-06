import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { CartIcon as LucideCartIcon } from 'lucide-animated'

const CartIcon = forwardRef(({ isHovered, size = 26, className = '', ...props }, ref) => {
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
    <LucideCartIcon
      ref={innerRef}
      size={size}
      className={className}
      animateOnHover={false}
      {...props}
    />
  )
})

CartIcon.displayName = 'CartIcon'

export default CartIcon

