// Get the container for particles
const particleContainer = document.getElementById("particle-container");

// Function to create particles
function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Set the initial position of the particle
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Append particle to the container
    particleContainer.appendChild(particle);

    // Set random animation values for the particle (direction and speed)
    const size = Math.random() * 10 + 5;  // Random size between 5px and 15px
    const directionX = Math.random() * 2 - 1;  // Random horizontal direction
    const directionY = Math.random() * 2 - 1;  // Random vertical direction
    const speed = Math.random() * 1.5 + 0.5;  // Random speed between 0.5s and 2s

    // Apply styles for the particle animation
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.animation = `particle-animation ${speed}s ease-out forwards`;

    // Move the particle in random directions and fade it out
    particle.style.transform = `translate(${directionX * 200}px, ${directionY * 200}px)`;

    // Remove the particle after animation
    setTimeout(() => {
        particle.remove();
    }, speed * 1000);
}

// Add mouse move event listener
document.addEventListener("mousemove", (e) => {
    // Generate particles at the mouse position
    createParticle(e.pageX,

