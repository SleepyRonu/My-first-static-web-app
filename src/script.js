function mostrarSaludo() {
    alert("¡Hola! Soy Ronu!!!!!!. Gracias por visitar mi página.");
}

// Efecto de scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});