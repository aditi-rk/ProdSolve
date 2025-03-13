document.addEventListener('DOMContentLoaded', function() {
    // Select all link items
    const linkItems = document.querySelectorAll('.link-item');
    
    // Apply staggered animations with a slight delay between each item
    linkItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = `fadeUp 0.5s ease forwards`;
        }, 100 * (index + 1)); // 100ms delay multiplied by position (starting from 1)
    });
    
    // Add a subtle hover sound effect (optional, uncomment if desired)
    /*
    linkItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const hoverSound = new Audio('hover-sound.mp3'); // Create your own subtle sound file
            hoverSound.volume = 0.2; // Keep volume low
            hoverSound.play();
        });
    });
    */
    
    // Add a click handler to make the transition between links more elegant
    linkItems.forEach(item => {
        const link = item.querySelector('a');
        
        link.addEventListener('click', function(e) {
            // Only apply for external links (not hash/internal links)
            if (this.getAttribute('href').indexOf('#') !== 0) {
                e.preventDefault();
                const href = this.getAttribute('href');
                
                // Add exit animation
                item.style.transform = 'scale(0.95) translateY(10px)';
                item.style.opacity = '0';
                
                // Navigate after a short delay to see the animation
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
});

// Add custom cursor effect (optional, uncomment if desired)
/*
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.custom-cursor') || createCustomCursor();
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.backgroundColor = 'rgba(108, 92, 231, 0.3)';
    cursor.style.pointerEvents = 'none';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'transform 0.1s ease, background-color 0.3s ease';
    
    document.body.appendChild(cursor);
    
    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    return cursor;
}
*/