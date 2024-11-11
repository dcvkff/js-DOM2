const gallery = document.getElementById('gallery');
let loadedImages = [];

async function fetchImages(count = 4) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10)}&limit=${count}`);
        const images = await response.json();
        return images.map(img => img.download_url);
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}

function loadImages(images) {
    images.forEach((imageUrl) => {
        const img = document.createElement('img');
        img.src = imageUrl;
        gallery.appendChild(img);
    });
    loadedImages.push(...images);
}

async function loadMoreImages() {
    let newImages;
    do {
        newImages = await fetchImages(4);
    } while (newImages.some(img => loadedImages.includes(img)));
    loadImages(newImages);
}

function clearGallery() {
    gallery.innerHTML = '';
    loadedImages = []; 
}

function removeLastImage() {
    if (gallery.lastElementChild) {
        gallery.removeChild(gallery.lastElementChild);
        loadedImages.pop();
    }
}

function reverseGallery() {
    const images = Array.from(gallery.children).reverse();
    clearGallery();
    images.forEach((img) => gallery.appendChild(img));
}

document.addEventListener('DOMContentLoaded', () => {
    loadMoreImages();
});
