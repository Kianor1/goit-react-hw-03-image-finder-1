import React from 'react';
import s from './ImageGallery.module.css';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';

export const ImageGallery = () => {
  return (
    <ul className={s.gallery}>
      <ImageGalleryItem />
    </ul>
  );
};
