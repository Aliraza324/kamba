import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { ArrowRightIcon as LucideArrowRightIcon } from 'lucide-animated'

const ArrowRightIcon = forwardRef(
  ({ isHovered, size = 18, className = '', ...props }, ref) => {
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
      <LucideArrowRightIcon
        ref={innerRef}
        size={size}
        className={className}
        animateOnHover={false}
        {...props}
      />
    )
  }
)

ArrowRightIcon.displayName = 'ArrowRightIcon'

export default ArrowRightIcon

