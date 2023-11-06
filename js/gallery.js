import { renderThumbnails } from './thumbnail.js';
import { showPicture } from './picture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbmail-id]');

    if(!thumbnail) {
      return;
    }
    evt.preventDefault();
    const thumbmailId = +thumbnail.dataset.thumbmailId;
    const pictureData = pictures.find(({ id }) => id === thumbmailId);

    showPicture(pictureData);
  });

  renderThumbnails(pictures, container);
};


export{renderGallery};
