function odeslatFormular(event) {
    event.preventDefault();
    const jmeno = document.getElementById('jmeno').value;
    const zprava = document.getElementById('zprava').value;
    alert(`Děkujeme za zprávu, ${jmeno}!\nVaše zpráva: ${zprava}`);
}
// Lightbox otevření
document.querySelectorAll('.image-clickable').forEach(img => {
    img.addEventListener('click', function () {
        document.getElementById('lightbox-img').src = this.src;
        document.getElementById('lightbox-overlay').style.display = 'flex';
    });
});

// Zavření lightboxu
function zavritLightbox() {
    document.getElementById('lightbox-overlay').style.display = 'none';
}
