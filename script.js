// Dados dos personagens
const characters = {
    korra: {
        name: "Korra",
        img: "imagens/personagens/modal/korramodal.jpeg",
        description: "Korra é a Avatar atual e uma guerreira destemida. Ela enfrenta desafios complexos para equilibrar o mundo e superar os legados do passado."
    },
    Asami: {
        name: "Asami",
        img: "imagens/personagens/modal/asamimodal.jpg",
        description: "Asami é uma engenheira brilhante, aliada de Korra, que usa sua inteligência e habilidades para lutar contra a desigualdade no mundo."
    },
    Mako: {
        name: "Mako",
        img: "imagens/personagens/modal/makomodal.jpeg",
        description: "Mestre do fogo e guarda de Korra."
    },
    Bolin: {
        name: "Bolin",
        img: "imagens/personagens/modal/bolinmodal.jpeg",
        description: "Mestre da rocha."
    }
};

// Função para abrir o modal
function openModal(characterKey) {
    const modal = document.getElementById("modal");
    const character = characters[characterKey];

    document.getElementById("modal-name").innerText = character.name;
    document.getElementById("modal-img").src = character.img;
    document.getElementById("modal-description").innerText = character.description;

    modal.style.display = "flex";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Links dos trailers
const trailers = {
    trailer1: "https://www.youtube.com/embed/I2tC9U-S4Mg?si=gQMeHJz6_c1UC3QG",
    trailer2: "https://www.youtube.com/embed/EGSiHpuTzQU?si=6u--XRwI48OK5b41",
    trailer3: "https://www.youtube.com/embed/WW88iK5JZWQ?si=2Los3yar2iQVOn9F"
};

// Função para abrir o modal de trailer
function openTrailer(trailerKey) {
    const modal = document.getElementById("trailer-modal");
    const video = document.getElementById("trailer-video");

    video.src = trailers[trailerKey];
    modal.style.display = "flex";
}

// Função para fechar o modal de trailer
function closeTrailer() {
    const modal = document.getElementById("trailer-modal");
    const video = document.getElementById("trailer-video");

    video.src = ""; // Remove o link para parar o vídeo
    modal.style.display = "none";
}

// Validação do formulário e mensagem de sucesso
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMessage = document.getElementById("success-message");

    // Validação básica
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Exibir mensagem de sucesso
    successMessage.style.display = "block";

    // Limpar o formulário
    document.getElementById("contact-form").reset();
});

// Função para validar e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

let currentSlide = 0;

// Função para mover o slide
function moveSlide(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Atualiza o slide atual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move a roleta
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}


