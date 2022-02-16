// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map((item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join("");
gallery.insertAdjacentHTML("beforeend", markup);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let instance = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionPosition': 'bottom', 'captionDelay': 250});
  // instance.close(); 

//   gallery.addEventListener("click", (event) => {
//   event.preventDefault();
//   const original = event.target;

//   if (original === gallery) {
//     return;
//   };

// // let instance = new SimpleLightbox('.gallery a', {'captionsData': 'alt', 'captionPosition': 'bottom', 'captionDelay': 250});
//   instance.open(); 
  
// });
