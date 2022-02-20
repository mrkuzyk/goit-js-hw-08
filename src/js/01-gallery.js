// Add imports above this line
import {galleryItems} from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

//? cтворюю розмітку з вхідного масиву
const makePreviewImageGallery = ({preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
    </a>`
}

//? перебираю масив і позбуваюся його
const elements = galleryItems.map(makePreviewImageGallery).join('');

//? добавляю розмітку в готовий хтмл
galleryEl.insertAdjacentHTML('beforeend', elements);

//? підключена бібліотека на модалку
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', //? змінено текст щоб брався з "альт"
    captionDelay: 250, //? затримка появи тексту 250 мс
});