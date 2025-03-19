document.addEventListener("DOMContentLoaded", function () {
    // Hero Title e Subtitle - Mantendo a animação correta
    let heroTitle = document.querySelector(".hero-title");
    let heroSubtitle = document.querySelector(".hero-subtitle");

    if (heroTitle && heroSubtitle) {
        // Divide o título em letras (chars)
        let titleText = heroTitle.textContent;
        heroTitle.innerHTML = "";
        titleText.split("").forEach(letter => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.display = "inline-block";
            heroTitle.appendChild(span);
        });

        // Divide o parágrafo em palavras corretamente (mantendo espaços)
        let subtitleText = heroSubtitle.textContent;
        heroSubtitle.innerHTML = "";
        subtitleText.split(" ").forEach((word, index, array) => {
            let span = document.createElement("span");
            span.textContent = word;

            // Adiciona espaço após cada palavra, exceto a última
            if (index !== array.length - 1) {
                span.innerHTML += "&nbsp;";
            }

            span.style.display = "inline-block";
            heroSubtitle.appendChild(span);
        });

        // Animação da Hero Section
        gsap.from(heroTitle.children, {
            opacity: 0,
            y: 50,
            stagger: 0.05,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(heroSubtitle.children, {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });
    }

    // Inicializar Swiper para a seção de serviços
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000, // Tempo entre os slides (3 segundos)
            disableOnInteraction: false // Continua rodando mesmo após interação do usuário
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // Seleciona todas as seções e elementos para animar
    const sections = document.querySelectorAll("section");
    const elementsToAnimate = document.querySelectorAll(".services .swiper-slide, .about .contact-form");

    // Oculta os elementos inicialmente
    sections.forEach((section) => {
        section.style.opacity = "0";
    });

    elementsToAnimate.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
    });

    // Função para revelar os elementos ao rolar a página
    function revealOnScroll() {
        sections.forEach((section) => {
            if (section.getBoundingClientRect().top < window.innerHeight * 0.85) {
                gsap.to(section, {
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out"
                });
            }
        });

        elementsToAnimate.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 2,
                    ease: "power3.out"
                });
            }
        });
    }

    // Executa a função ao carregar e ao rolar a página
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    // Navbar animada ao scroll
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
    //animaoces da sec about 
    gsap.from(".about-img img", {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".about-txt", {
        opacity: 0,
        x: 100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});
