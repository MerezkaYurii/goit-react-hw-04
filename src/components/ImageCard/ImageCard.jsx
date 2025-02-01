import s from './ImageCard.module.css';

export const ImageCard = ({ item, onImageClick }) => {
  return (
    <div className={s.wrapper}>
      <li className={s.item}>
        <img
          onClick={() => onImageClick(item.urls.regular)}
          className={s.img}
          src={item.urls.small}
          alt={item.description}
          width={300}
        />
      </li>
    </div>
  );
};
