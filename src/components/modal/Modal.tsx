import React from 'react';
import { useDisableBodyScroll } from '../../hooks/useDisableBodyScroll';

export interface ModalProps {
  isOpen: boolean
  onOpen: () => void,
  onClose: () => void
}

/**
 * The base class for all modal windows in the application. Contains all the main functions and properties for the modal windows of the application
 * @return {JSX.Element} 
 */
function Modal({ children, isOpen, onOpen, onClose }: React.PropsWithChildren<ModalProps>): JSX.Element {
  useDisableBodyScroll(isOpen)

  React.useEffect(
    () => {
      onOpen()
    },
    [onOpen]
  )

  return (
    <div 
      className='fixed top-0 left-0 w-screen h-screen overflow-y-hidden bg-black/60 flex justify-center items-center z-[100]'
      onClick={() => onClose()} 
    >
      <div 
        className='p-2 bg-background rounded-md'
        onClick={(event) => {event.stopPropagation()}}
      > 
        {children}
      </div>
    </div>
  );
}

export default Modal;