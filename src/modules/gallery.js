import { fetchImages } from "./api.js";

const gallery = document.getElementById("gallery");
let loadedImages = [];

export function loadImages(images) {
    images.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        gallery.appendChild(img);
    });
    loadedImages.push(...images);
}

export async function loadMoreImages() {
    let newImages;
    do {
        newImages = await fetchImages(4);
    } while (newImages.some(img => loadedImages.includes(img)));
    loadImages(newImages);
}

export function clearGallery() {
    gallery.innerHTML = "";
    loadedImages = [];
}

export function removeLastImage() {
    if (gallery.lastElementChild) {
        gallery.removeChild(gallery.lastElementChild);
        loadedImages.pop();
    }
}

export function reverseGallery() {
    const images = Array.from(gallery.children).reverse();
    clearGallery();
    images.forEach((img) => gallery.appendChild(img));
}