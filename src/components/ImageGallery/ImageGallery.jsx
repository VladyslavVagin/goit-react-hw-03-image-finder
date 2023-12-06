import React from 'react';
import css from './ImageGallery.module.css'
import { nanoid } from 'nanoid';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({images}) => {
  return <ul className={css.gallery}>
     {images.map(image => (
        <ImageGalleryItem key={image.id+nanoid()} image={image} />
      ))}
  </ul>;
};

export default ImageGallery;
