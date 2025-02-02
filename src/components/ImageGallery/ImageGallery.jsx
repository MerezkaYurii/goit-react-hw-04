import { ImageCard } from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';


const ImageGallery = ({ pictures , onImageClick}) => {
 
  return (
    <>
      <ul className={s.wrapper}>
        {pictures.map(item => {
          return (
            <ImageCard key={item.id} item={item} onImageClick={onImageClick} />
          );
        })}
      </ul>

   
    </>
  );
};

export default ImageGallery;
