import React from "react"

/**
 * React hook to turn off page scrolling if the element it connects to is visible
 * @param isOpen a property that determines whether a component is visible or not
 */
export const useDisableBodyScroll = (isOpen: boolean) => {
  React.useEffect(
    () => {
      document.body.style.overflowY = 'hidden'

      return () => {
        document.body.style.overflowY = 'auto'
      }
    },
    [isOpen]
  )
} 