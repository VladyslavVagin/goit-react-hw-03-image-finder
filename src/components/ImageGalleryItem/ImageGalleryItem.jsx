import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    if (this.state.showModal) {
      this.setState({ showModal: false });
    } else {
      this.setState({ showModal: true });
    }
  };

  render() {
    const { showModal } = this.state;
    const { image } = this.props;
    const { webformatURL, tags, largeImageURL } = image;
    return (
      <>
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            picture={largeImageURL}
            tags={tags}
          />
        )}
        <li className={css.item} onClick={this.toggleModal}>
          <img
            src={webformatURL}
            alt={tags}
            loading="lazy"
            className={css.image}
          />
        </li>
      </>
    );
  }
}
