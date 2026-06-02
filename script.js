// ==========================================================================
// 1. SITE PRE-LOADER DISMISSAL ENGINE
// ==========================================================================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if(loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }, 1200);
    }
});

// ==========================================================================
// 2. TEXT TYPING CYCLE HOOK
// ==========================================================================
const roles = [
    "Robotics & AI Enthusiast",
    "Young Tech Innovator",
    "Problem Solver"
    
    
];

const typingText = document.getElementById("typing-text");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if(!typingText) return;
    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeEffect, deleting ? 60 : 100);
}
typeEffect();

// ==========================================================================
// 3. STAT DATA DIGIT COUNTER ENGINE
// ==========================================================================
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});

// ==========================================================================
// 4. CUSTOM COMPONENT CURSOR ACCENTS
// ==========================================================================
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if(cursorDot && cursorOutline) {
    window.addEventListener("mousemove", e => {
        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";
        
        cursorOutline.style.left = (e.clientX - 14) + "px";
        cursorOutline.style.top = (e.clientY - 14) + "px";
    });
}

// ==========================================================================
// 5. WINDOW SCROLL ELEMENT REVEAL
// ==========================================================================
const revealElements = document.querySelectorAll(".glass,.project-card,.skill-box,.about-card,.contact-card");
function revealOnScroll() {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==========================================================================
// 6. BACK TO TOP FUNCTIONAL BADGE
// ==========================================================================
const backToTop = document.getElementById("backToTop");
if(backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.style.display = (window.scrollY > 400) ? "block" : "none";
    });
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// ==========================================================================
// 7. LIGHT/DARK THEME SWITCH LOGIC
// ==========================================================================
const themeToggle = document.getElementById("theme-toggle");
if(themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const icon = themeToggle.querySelector("i");
        if (document.body.classList.contains("light-theme")) {
            icon.className = "fas fa-sun";
        } else {
            icon.className = "fas fa-moon";
        }
    });
}

// ==========================================================================
// 8. DYNAMIC NAVBAR BOX SHADOW EXPANSION
// ==========================================================================
const navbar = document.getElementById("navbar");
if(navbar) {
    window.addEventListener("scroll", () => {
        navbar.style.boxShadow = (window.scrollY > 50) ? "0 10px 30px rgba(0,0,0,.3)" : "none";
    });
}

// ==========================================================================
// 9. AMBIENT GENERAL FLOATING PARTICLES MATRIX
// ==========================================================================
const particleContainer = document.getElementById("particles");
if(particleContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("span");
        particle.style.position = "absolute";
        const size = Math.random() * 5 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        particle.style.background = "rgba(59,130,246,.5)";
        particle.style.borderRadius = "50%";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.animation = `floatParticle ${5 + Math.random() * 10}s linear infinite`;
        particleContainer.appendChild(particle);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatParticle {
    0% { transform: translateY(0); opacity: .2; }
    50% { opacity: 1; }
    100% { transform: translateY(-200px); opacity: 0; }
}`;
document.head.appendChild(style);

// ==========================================================================
// 10. ACTIVE LINK POSITION DETECTION STYLES
// ==========================================================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ==========================================================================
// 11. PREMIUM INTERACTIVE BACKDROP CANVAS STRING ENGINE
// ==========================================================================
const canvas = document.getElementById('string-canvas');
if(canvas) {
    const ctx = canvas.getContext('2d');
    const container = document.getElementById('constellation-container');

    let width = canvas.width = container.offsetWidth;
    let height = canvas.height = container.offsetHeight;

    const numPoints = 26; 
    const connectDistance = 115; 
    const points = [];
    let mouse = { x: null, y: null, radius: 140 };

    for (let i = 0; i < numPoints; i++) {
        points.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.7,
            vy: (Math.random() - 0.5) * 0.7,
            radius: Math.random() * 2 + 1.5
        });
    }

    container.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    container.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animateStrings() {
        ctx.clearRect(0, 0, width, height);
        
        points.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            if (mouse.x !== null && mouse.y !== null) {
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < mouse.radius) {
                    let force = (mouse.radius - dist) / mouse.radius;
                    p.x += (dx / dist) * force * 2.0;
                    p.y += (dy / dist) * force * 2.0;
                }
            }

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(96, 165, 250, 0.45)';
            ctx.fill();
        });

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                let p1 = points[i];
                let p2 = points[j];
                let dx = p1.x - p2.x;
                let dy = p1.y - p2.y;
                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectDistance) {
                    let alpha = (1 - (dist / connectDistance)) * 0.32;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animateStrings);
    }

    window.addEventListener('resize', () => {
        if (!container) return;
        width = canvas.width = container.offsetWidth;
        height = canvas.height = container.offsetHeight;
    });

    animateStrings();
}