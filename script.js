document.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const homeSection = document.querySelector('.home');
    
    // Ajusta o valor do divisor para controlar a velocidade do efeito
    homeSection.style.backgroundPositionY = `${(scrollPosition * 0.5)}px`;
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = 'inicio';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Chama a função para definir o link ativo ao carregar a página
});
