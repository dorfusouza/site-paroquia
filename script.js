document.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const homeSection = document.querySelector('.home');
    
    // Ajusta o valor do divisor para controlar a velocidade do efeito
    homeSection.style.backgroundPositionY = `${(scrollPosition * 0.5)}px`;
});

