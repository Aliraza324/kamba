import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { XIcon as LucideXIcon } from 'lucide-animated'

const XIcon = forwardRef(({ isHovered, size = 26, className = '', ...props }, ref) => {
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
    <LucideXIcon
      ref={innerRef}
      size={size}
      className={className}
      animateOnHover={false}
      {...props}
    />
  )
})

XIcon.displayName = 'XIcon'

export default XIcon

