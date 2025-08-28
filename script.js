document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.gallery-photo');
    let currentPhotoIndex = 0;

    function showNextPhoto() {
        // Remove a classe 'active' da foto atual
        photos[currentPhotoIndex].classList.remove('active');

        // Incrementa o índice, voltando para 0 se for a última foto
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;

        // Adiciona a classe 'active' à próxima foto
        photos[currentPhotoIndex].classList.add('active');
    }

    // Exibe a primeira foto
    photos[currentPhotoIndex].classList.add('active');

    // Troca a foto a cada 3 segundos (3000 milissegundos)
    setInterval(showNextPhoto, 3000);
});
