import Modal from 'react-modal';
import s from "./ImageModal.module.css"
Modal.setAppElement("#root");




const ImageModal = ({isOpen,  imageUrl, onRequestClose}) => {


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



   return(
  <Modal 
  isOpen={isOpen}
  overlayClassName={s.overlay}
  className={s.content}
  ariaHideApp={false}
  onRequestClose={onRequestClose}
  style={customStyles}
   >


<img src={imageUrl} alt="Large view" className={s.modalImage} />


</Modal>
  )
  
}

export default ImageModal