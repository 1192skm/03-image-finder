import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { ModalWindow } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };
  
  render() {
    const { isModalOpen } = this.state;
    console.log(isModalOpen);
    const { smallImage, largeImage, description } = this.props;
    return (
      <>
        <li className={css.galleryitem}>
          <img
            className={css.galleryitemimage}
            src={smallImage}
            alt={description}
            onClick={this.onModalOpen}
          />
        </li>
        {isModalOpen && <ModalWindow
          isOpen={isModalOpen}
          largeImage={largeImage}
          description={description}
          closeModal={this.onModalClose}
        />}
      </>
    );
  }
}
