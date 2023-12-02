import React from 'react';

const ImageGalleryItem = ({images}) => {
  return (
    <>
      {images.map((image) => {
        const {id, webformatURL} = image;
        return (  <li key={id}>
          <img src={webformatURL} alt={id} loading='lazy'/>
        </li>)
      })}
    </>
  )
}

export default ImageGalleryItem;
