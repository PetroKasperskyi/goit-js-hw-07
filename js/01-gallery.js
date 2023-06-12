import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');
const markup = createGalleryItemsMurkup(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', markup)


function createGalleryItemsMurkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}" >
  </a>
</li>`
}).join('');
}
galleryContainerEl.addEventListener('clck', onClick)
function onClick(evt) {
    
    if (evt.target.nodeName !== "BUTTON") {
        return;  
    }
    console.dir(evt.target);
}
//  const instance = basicLightbox.create(`<img src="${evt.dataset.source}" width="800" height="600">`);
// instance.show()



