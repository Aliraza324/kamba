import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { PlayIcon as LucidePlayIcon } from 'lucide-animated'

const PlayIcon = forwardRef(
  ({ isHovered, size = 24, className = '', ...props }, ref) => {
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
      <LucidePlayIcon
        ref={innerRef}
        size={size}
        className={className}
        animateOnHover={false}
        {...props}
      />
    )
  }
)

PlayIcon.displayName = 'PlayIcon'

export default PlayIcon

