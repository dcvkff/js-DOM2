import { loadMoreImages, clearGallery, removeLastImage, reverseGallery } from "./modules/gallery.js";

document.addEventListener("DOMContentLoaded", () => {
    loadMoreImages();
    // document.getElementById("addImages").addEventListener("click", loadMoreImages);
    document.getElementById("clearGallery").addEventListener("click", clearGallery);
    document.getElementById("removeLast").addEventListener("click", removeLastImage);
    document.getElementById("reverseGallery").addEventListener("click", reverseGallery);
});
