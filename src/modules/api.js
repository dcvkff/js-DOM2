export async function fetchImages(count = 4) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 10)}&limit=${count}`);
        const images = await response.json();
        return images.map(img => img.download_url);
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
}