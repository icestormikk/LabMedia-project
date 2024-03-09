import Modal, { ModalProps } from './Modal';

interface DeleteUserModalProps extends ModalProps {
  onAccept: () => void
  onCancel: () => void
}

/**
 * A modal window with content that will allow the user to delete the selected user
 * @return {JSX.Element} 
 */
function DeleteUserModal({ isOpen, onOpen, onClose, onAccept, onCancel }: DeleteUserModalProps): JSX.Element {
  return (
    <Modal
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
    >
      <div className='p-4 block space-y-6'>
        <p className='font-semibold'>Вы действительно хотите удалить пользователя?</p>
        <div className='flex justify-center items-center w-full gap-12'>
          <button 
            className='bg-[#E0E0E0] text-[#828282] px-12 py-1 rounded-md'
            onClick={() => onAccept()}
          >
            Да
          </button>
          <button 
            className='bg-username text-white px-12 py-1 rounded-md'
            onClick={() => onCancel()}
          >
            Нет
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteUserModal;