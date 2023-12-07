import React from 'react';
import css from './ImageGallery.module.css'
import { nanoid } from 'nanoid';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({images}) => {
  return <ul className={css.gallery}>
     {images.map(image => (
        <ImageGalleryItem key={image.id+nanoid()} image={image} />
      ))}
  </ul>;
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ImageGallery;
