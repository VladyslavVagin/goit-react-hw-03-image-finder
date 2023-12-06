import React from 'react';
import css from './ImageGalleryItem.module.css'
import { nanoid } from 'nanoid';

const ImageGalleryItem = ({images, onClick}) => {
  return (
    <>
      {images.map((image) => {
        const { webformatURL, tags, id, largeImageURL} = image;
          return ( 
            <li key={id+nanoid()} className={css.item} onClick={onClick}>
            <img src={webformatURL} alt={tags} loading='lazy' className={css.image}/>
          </li>)
      })}
    </>
  )
}

export default ImageGalleryItem;
