import PropTypes from 'prop-types';

import { ImageGalleryItem } from './ImageGalleryItem';
import { StyledImageGallery } from './ImageGalleryStyled';

export const ImageGallery = ({ images }) => {
  return (
    <StyledImageGallery className="gallery">
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageGalleryItem image={image} />
          </li>
        );
      })}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
