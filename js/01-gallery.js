import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}" />
  </a>
</li>`
  );

galleryContainerEl.insertAdjacentHTML('beforeend', markup.join(''))
galleryContainerEl.addEventListener('click', onClick)
function onClick(event) {
  event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return; 
    }


const instance = basicLightbox.create(`
 <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show()  
}


