import Modal from 'react-modal';
import {
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

const customStyles = {
  content: {
    width: '1000px',
    border: 'none',
    backgroundColor: 'transparent',
    inset: 'auto',
  },
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
};

Modal.setAppElement('#root');

export function ModalWindow({ isOpen, closeModal, description, largeImage }) {

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        onAfterOpen={() => disableBodyScroll(document)}
        onAfterClose={() => enableBodyScroll(document)}
      >
        <img src={largeImage} alt={description} />
      </Modal>
    </div>
  );
}
