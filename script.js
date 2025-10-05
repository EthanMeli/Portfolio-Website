// Page Navigation Functions
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function showProject(projectId) {
    showPage(projectId);
    
    // Add some visual feedback
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (card.dataset.project === projectId) {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        }
    });
}

function showHome() {
    showPage('home');
}

// Add click sound effect (optional)
function playClickSound() {
    // You can add a small audio file for 8-bit click sounds
    // const audio = new Audio('click.wav');
    // audio.play().catch(() => {}); // Ignore errors if no audio file
}

// Add click sound to all buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', playClickSound);
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.filter = '';
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            showHome();
        }
    });
});

// Add particle effect for background (optional enhancement)
function createParticles() {
    const particleCount = 20;
    const container = document.querySelector('.container');
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: #DAA520;
            pointer-events: none;
            z-index: -1;
            animation: float ${5 + Math.random() * 10}s infinite linear;
            left: ${Math.random() * 100}vw;
            animation-delay: ${Math.random() * 5}s;
        `;
        document.body.appendChild(particle);
    }
}

// CSS for particle animation (injected via JavaScript)
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles on load
document.addEventListener('DOMContentLoaded', createParticles);

// Smooth scrolling for internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Add typing effect to hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on home page
document.addEventListener('DOMContentLoaded', function() {
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const originalText = subtitle.textContent;
        typeWriter(subtitle, originalText, 150);
    }
});
