document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        const images = [
            {src: 'https://picsum.photos/800/600?random=1'},
            {src: 'https://picsum.photos/800/600?random=2'},
            {src: 'https://picsum.photos/800/600?random=3'},
            {src: 'https://picsum.photos/800/600?random=4'},
            {src: 'https://picsum.photos/800/600?random=5'},
            {src: 'https://picsum.photos/800/600?random=6'}
        ];

        images.forEach(img => {
            const imageEl = document.createElement('img');
            imageEl.src = img.src;
            imageEl.alt = "Imagen de galería";
            gallery.appendChild(imageEl);
        });
    }
});