import React from 'react';
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({images}) => {
  return (
    <>
      {images.map((image) => {
        const {id, webformatURL} = image;
        return (  <li key={id} className={css.item}>
          <img src={webformatURL} alt={id} loading='lazy' className={css.image}/>
        </li>)
      })}
    </>
  )
}

export default ImageGalleryItem;
