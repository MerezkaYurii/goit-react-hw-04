import { ImageCard } from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import ImageModal from '../ImageModal/ImageModal';
import { useState } from 'react';

const ImageGallery = ({ pictures }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  return (
    <>
      <ul className={s.wrapper}>
        {pictures.map(item => {
          return (
            <ImageCard key={item.id} item={item} onImageClick={openModal} />
          );
        })}
      </ul>

      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={selectedImage}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default ImageGallery;
