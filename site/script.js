let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dotsContainer = document.getElementById('dots');
const progress = document.getElementById('progress');

// ===== CURSORE PERSONALIZZATO =====
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
let followerX = mouseX;
let followerY = mouseY;
let scale = 1;
let scaleTarget = 1;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Smooth movement with linear interpolation (Lerp)
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    scale += (scaleTarget - scale) * 0.2;

    // Apply transform3d for hardware acceleration
    // Offsets -10 and -20 center the cursors (based on their width/height)
    cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0) scale(${scale})`;
    cursorFollower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0) scale(${scale})`;

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Interactive elements hover effect
const interactiveElements = 'button, a, .nav-item, .speaker-card, .photo, .dot, .code-tab';

// Use event delegation for better performance with dynamic elements
document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveElements)) {
        scaleTarget = 1.5;
    }
});

document.addEventListener('mouseout', (e) => {
    const element = e.target.closest(interactiveElements);
    if (element) {
        // Prevent reset when moving to a child of the interactive element
        if (e.relatedTarget && element.contains(e.relatedTarget)) {
            return;
        }
        scaleTarget = 1;
    }
});

// ===== NAVIGATION DOTS =====
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
}

// ===== NAV MENU INTERATTIVO =====
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        goToSlide(index);
    });
});

function updateNavMenu() {
    navItems.forEach((item, index) => {
        if (index === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ===== SLIDE MANAGEMENT =====
function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev');
        if (index === currentSlide) {
            slide.classList.add('active');
            initializeSlideEffects(index);
        } else if (index < currentSlide) {
            slide.classList.add('prev');
        }
    });

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    updateNavMenu();
    progress.style.width = ((currentSlide + 1) / totalSlides * 100) + '%';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

// ===== EFFETTI SPECIALI PER SLIDE =====
function initializeSlideEffects(slideIndex) {
    switch (slideIndex) {
        case 0:
            // Speaker cards già hanno l'effetto 3D flip
            break;
        case 1:
            // Parallax è già attivo tramite CSS
            animateTimeline();
            break;
        case 2:
            // Info cards con hover effect
            break;
        case 3:
            // Education highlights
            break;
        case 4:
            // Photo stack già interattivo
            break;
        case 5:
            animateCode();
            break;
        case 6:
            animateCounters();
            break;
    }
}

// ===== TIMELINE ANIMATION =====
function animateTimeline() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    timelinePoints.forEach((point, index) => {
        setTimeout(() => {
            point.style.transform = 'scale(1.2)';
            setTimeout(() => {
                point.style.transform = 'scale(1)';
            }, 300);
        }, index * 500);
    });
}

// ===== CODE ANIMATION (SLIDE 6) =====
const codeSnippets = {
    algorithm: `// Calculate Bernoulli Numbers
function bernoulli(n) {
    const B = [];
    for (let m = 0; m <= n; m++) {
        B[m] = 1 / (m + 1);
        for (let j = m; j >= 1; j--) {
            B[j - 1] = j * (B[j - 1] - B[j]);
        }
    }
    return B[0];
}

// The first algorithm ever written
// for a computing machine`,

    notes: `"The Analytical Engine has no pretensions
whatever to originate anything.
It can do whatever we know how to
order it to perform.

It can follow analysis; but it has
no power of anticipating any analytical
relations or truths."

— Note G, 1843`,

    vision: `"The engine might compose elaborate
pieces of music of any degree of
complexity or extent.

Supposing that the fundamental
relations of pitched sounds were
susceptible of such expression
and adaptations..."

— Ada's prophetic vision of
  computer-generated music`
};

let currentCodeTab = 'algorithm';

function animateCode() {
    const codeElement = document.getElementById('animatedCode');
    if (!codeElement) return;

    const code = codeSnippets[currentCodeTab];
    let i = 0;
    codeElement.textContent = '';

    function typeCode() {
        if (i < code.length) {
            codeElement.textContent += code.charAt(i);
            i++;
            setTimeout(typeCode, 20);
        }
    }

    typeCode();
}

// Code tabs functionality
document.querySelectorAll('.code-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        // Remove active class from all tabs
        document.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
        // Add active to clicked tab
        this.classList.add('active');

        // Update current tab and reanimate
        currentCodeTab = this.getAttribute('data-lang');
        animateCode();
    });
});

// ===== COUNTER ANIMATION (SLIDE 7) =====
function animateCounters() {
    const counters = document.querySelectorAll('.number-counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ===== PARALLAX MOUSE EFFECT =====
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    const layers = document.querySelectorAll('.parallax-layer');
    layers.forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// ===== PHOTO STACK CYCLING =====
const photoStack = document.querySelector('.photo-stack');
if (photoStack) {
    const photos = Array.from(photoStack.querySelectorAll('.photo'));

    photos.forEach(photo => {
        photo.addEventListener('click', function () {
            // Solo se è la carta in cima (z-index 3)
            if (this === photos[0]) {
                // Aggiungi classe animazione
                this.classList.add('cycling');

                // Dopo l'animazione, riordina le carte
                setTimeout(() => {
                    this.classList.remove('cycling');
                    // Sposta la prima carta alla fine dell'array
                    photos.push(photos.shift());

                    // Riapplica gli stili in ordine
                    photos.forEach((p, index) => {
                        if (index === 0) {
                            p.style.transform = 'translateY(0px) translateX(0px) rotate(-2deg)';
                            p.style.zIndex = '3';
                        } else if (index === 1) {
                            p.style.transform = 'translateY(8px) translateX(8px) rotate(1deg)';
                            p.style.zIndex = '2';
                        } else if (index === 2) {
                            p.style.transform = 'translateY(16px) translateX(16px) rotate(-1deg)';
                            p.style.zIndex = '1';
                        }
                    });
                }, 500);
            }
        });
    });
}

// ===== 3D TILT EFFECT FOR SPEAKER CARDS =====
document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
    }
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
    }
    // Number keys for direct navigation
    if (e.key >= '1' && e.key <= '7') {
        goToSlide(parseInt(e.key) - 1);
    }
});

// ===== TOUCH/SWIPE SUPPORT =====
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) nextSlide();
    if (touchEndX > touchStartX + 50) prevSlide();
}

// ===== SCROLL WHEEL NAVIGATION =====
let scrollTimeout;
document.addEventListener('wheel', (e) => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    }, 150);
}, { passive: true });

// ===== INITIALIZE FIRST SLIDE =====
updateSlides();

// ===== PRELOAD EFFECTS =====
window.addEventListener('load', () => {
    // Add loading animation complete
    document.body.style.opacity = '1';
});

console.log('🚀 Ada Lovelace Presentation Loaded');
console.log('💡 Use Arrow Keys, Mouse Wheel, or Swipe to navigate');
console.log('🎯 Press 1-7 for direct slide navigation');