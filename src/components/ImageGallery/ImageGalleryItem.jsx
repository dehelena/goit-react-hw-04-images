import { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { id, webformatURL, largeImageURL, tags } = this.props.image;

    return (
      <>
        {isModalOpen && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        <img
          className={css.galleryItem}
          id={id}
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
      </>
    );
  }
}
