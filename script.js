document.addEventListener('DOMContentLoaded', function() {
    // Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar com scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Demonstração interativa
    const webcamContainer = document.getElementById('webcam-container');
    const controlItems = document.querySelectorAll('.control-item');
    let webcamActive = false;
    let currentExpression = 'sorrir';

    webcamContainer.addEventListener('click', function() {
        if (!webcamActive) {
            startWebcamDemo();
        } else {
            stopWebcamDemo();
        }
    });

    function startWebcamDemo() {
        // Simulação da ativação da webcam
        webcamActive = true;
        webcamContainer.querySelector('.webcam-overlay').style.display = 'none';
        
        // Criar elemento de vídeo simulado
        const videoElement = document.createElement('div');
        videoElement.className = 'video-simulation';
        videoElement.innerHTML = '<img src="https://placeholder.svg?height=300&width=400" alt="Simulação de webcam">';
        webcamContainer.appendChild(videoElement);
        
        // Iniciar simulação de detecção facial
        startExpressionDetection();
    }

    function stopWebcamDemo() {
        webcamActive = false;
        const videoElement = webcamContainer.querySelector('.video-simulation');
        if (videoElement) {
            webcamContainer.removeChild(videoElement);
        }
        webcamContainer.querySelector('.webcam-overlay').style.display = 'flex';
        
        // Parar simulação
        stopExpressionDetection();
    }

    function startExpressionDetection() {
        // Simulação de detecção de expressões
        expressionInterval = setInterval(() => {
            // Escolher aleatoriamente uma expressão para simular
            const expressions = ['sorrir', 'franzir', 'piscar-direito', 'piscar-esquerdo', 'boca-aberta'];
            const randomIndex = Math.floor(Math.random() * expressions.length);
            currentExpression = expressions[randomIndex];
            
            // Atualizar interface
            updateActiveExpression(currentExpression);
        }, 3000);
    }

    function stopExpressionDetection() {
        clearInterval(expressionInterval);
    }

    function updateActiveExpression(expression) {
        controlItems.forEach(item => {
            if (item.dataset.expression === expression) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                // Simulação de resposta do servidor
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }

    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de inscrição na newsletter
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitButton = newsletterForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Inscrevendo...';
            
            setTimeout(() => {
                // Simulação de resposta do servidor
                alert(`Email ${emailInput.value} inscrito com sucesso na nossa newsletter!`);
                newsletterForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 1500);
        });
    }

    // Animação de elementos ao scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.funcionamento-item, .beneficio-card, .membro-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Inicializar elementos com opacidade 0
    document.querySelectorAll('.funcionamento-item, .beneficio-card, .membro-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Executar animação no carregamento e no scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Simulação de controle da cadeira de rodas
    const chairControls = {
        'sorrir': () => console.log('Comando: Avançar'),
        'franzir': () => console.log('Comando: Parar'),
        'piscar-direito': () => console.log('Comando: Virar à Direita'),
        'piscar-esquerdo': () => console.log('Comando: Virar à Esquerda'),
        'boca-aberta': () => console.log('Comando: Recuar')
    };

    // Executar comando quando a expressão mudar
    let lastExpression = '';
    setInterval(() => {
        if (webcamActive && currentExpression !== lastExpression) {
            if (chairControls[currentExpression]) {
                chairControls[currentExpression]();
                lastExpression = currentExpression;
            }
        }
    }, 500);
});