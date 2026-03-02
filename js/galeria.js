// Lógica para Galería Dinámica con Efecto Zoom (Punto 2 de la corrección).
// Desarrollado por Claudia González.
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        // Generación dinámica desde JS (Requisito obligatorio)
        const images = [
            {src: 'https://picsum.photos/800/600?random=1'},
            {src: 'https://picsum.photos/800/600?random=2'},
            {src: 'https://picsum.photos/800/600?random=3'},
            {src: 'https://picsum.photos/800/600?random=4'},
            {src: 'https://picsum.photos/800/600?random=5'},
            {src: 'https://picsum.photos/800/600?random=6'}
        ];

        images.forEach(imgData => {
            const img = document.createElement('img');
            img.src = imgData.src;
            img.alt = "Imagen dinámica";
            img.style.transition = "transform 0.3s";
            
            // Efecto Zoom Modal
            img.onclick = () => {
                const modal = document.createElement('div');
                modal.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); display:flex; align-items:center; justify-content:center; z-index:1000;";
                const fullImg = document.createElement('img');
                fullImg.src = imgData.src;
                fullImg.style = "max-width:90%; max-height:90%; border:5px solid white;";
                modal.appendChild(fullImg);
                modal.onclick = () => modal.remove();
                document.body.appendChild(modal);
            };
            gallery.appendChild(img);
        });
    }
});