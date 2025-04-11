// Get the button element
const confettiBtn = document.getElementById('confetti-button');

// Define Boba-themed colors
const bobaColors = [
    '#6B4F4F', // Dark Brown (Tea/Tapioca)
    '#8B4513', // Saddle Brown (Tea)
    '#EADBC8', // Milk Tea Beige
    '#F5EBE0', // Creamy White
    '#DAC0A3', // Tan/Caramel
    '#3A3A3A'  // Dark Grey/Black (Tapioca Pearls)
];

// Helper function to get random boba color
function getRandomBobaColor() {
    return bobaColors[Math.floor(Math.random() * bobaColors.length)];
}

// Check if the button exists
if (confettiBtn) {
    // Add an event listener for clicks
    confettiBtn.addEventListener('click', () => {
        // Trigger confetti!

        // 1. Main Burst - Mix of Tea and Milk Colors
        confetti({
            particleCount: 80, // Fewer particles for a less overwhelming start
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8B4513', '#EADBC8', '#DAC0A3', '#F5EBE0'] // Tea, Milk, Caramel, Cream
        });

        // 2. "Tapioca Pearl" Effect - Darker, smaller, maybe falling slower?
        // Use setTimeout to launch these slightly after the main burst
        setTimeout(() => {
            confetti({
                particleCount: 40,
                spread: 100,
                origin: { y: 0.7 }, // Start a bit lower
                angle: 90, // Straight down initially? or mix angles
                gravity: 0.8, // Make them feel a bit heavier? Default is 1
                drift: Math.random() * 2 - 1, // Random horizontal drift
                scalar: 0.8, // Make them slightly smaller
                shapes: ['circle'], // Explicitly circles
                colors: ['#3A3A3A', '#6B4F4F'] // Pearl and dark brown colors
            });
        }, 50); // Launch 50ms after the first burst

        // 3. Side Splashes - Lighter colors from the sides
        setTimeout(() => {
             // Left Side Splash (Cream/Milk)
            confetti({
                particleCount: 30,
                angle: 60,
                spread: 60,
                origin: { x: 0 }, // Left edge
                colors: ['#F5EBE0', '#EADBC8'],
                scalar: 1.1 // Slightly larger splash particles
            });
             // Right Side Splash (Cream/Milk)
            confetti({
                particleCount: 30,
                angle: 120,
                spread: 60,
                origin: { x: 1 }, // Right edge
                colors: ['#F5EBE0', '#EADBC8'],
                scalar: 1.1
            });
        }, 150); // Launch splashes 150ms after the initial burst


        // Disable the button temporarily to prevent spamming
        confettiBtn.disabled = true;
        setTimeout(() => {
            confettiBtn.disabled = false;
        }, 2000); // Re-enable after 2 seconds
    });
}

// Optional: Gentle animation on scroll or load (CSS handles fadeIn)
console.log("Brewing birthday wishes... 🧋");