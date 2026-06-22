// Dynamic Typewriter Effect
const phrases = [
    "AI assistants.",
    "web experiences.",
    "automated workflows.",
    "digital solutions."
];

let i = 0;
let j = 0;
let isDeleting = false;
let currentPhrase = [];
let isEnd = false;

const typewriterElement = document.getElementById('typewriter');

function loop() {
    isEnd = false;
    typewriterElement.innerHTML = currentPhrase.join('');

    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            j++;
            typewriterElement.innerHTML = currentPhrase.join('');
        }

        if (isDeleting && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            j--;
            typewriterElement.innerHTML = currentPhrase.join('');
        }

        if (j == phrases[i].length) {
            isEnd = true;
            isDeleting = true;
        }

        if (isDeleting && j === 0) {
            currentPhrase = [];
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0;
            }
        }
    }

    const spedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (200 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;

    setTimeout(loop, time);
}

// Start typing effect when document loads
document.addEventListener('DOMContentLoaded', () => {
    loop();
    
    // Add glowing mouse tracker effect
    const orbs = document.querySelectorAll('.bg-orb');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        orbs[0].style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        orbs[1].style.transform = `translate(${x * -50}px, ${y * -50}px)`;
    });
});
