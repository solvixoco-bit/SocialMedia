// Animated Counter Function
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            // Show intermediate values without K/M during animation for smoother effect
            const displayValue = Math.floor(current);
            if (displayValue < 1000) {
                element.textContent = displayValue;
            } else {
                element.textContent = formatNumber(displayValue);
            }
        }
    }, 16);
}

// Format numbers with K, M suffix
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
}

// Initialize counters when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Animate all counters
    const counters = document.querySelectorAll('.counter, .stat-number[data-target]');

    // Use Intersection Observer to trigger animation when elements are visible
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Optional: Function to fetch real-time data from social media APIs
// Note: This requires backend server and API keys for security
async function fetchSocialMediaStats() {
    // This is a placeholder function showing how you would structure API calls
    // You'll need to implement backend endpoints that securely call social media APIs

    try {
        // Example structure (requires backend implementation):
        /*
        const response = await fetch('/api/social-stats');
        const data = await response.json();
        
        // Update Instagram stats
        document.querySelector('.instagram-link .counter[data-target]').setAttribute('data-target', data.instagram.followers);
        
        // Update Facebook stats
        document.querySelector('.facebook-link .counter[data-target]').setAttribute('data-target', data.facebook.followers);
        
        // Update YouTube stats
        document.querySelector('.youtube-link .counter[data-target]').setAttribute('data-target', data.youtube.subscribers);
        
        // Re-trigger animations
        animateAllCounters();
        */

        console.log('To enable real-time stats, you need to:');
        console.log('1. Set up a backend server (Node.js, Python, PHP, etc.)');
        console.log('2. Register apps on Instagram, Facebook, and YouTube developer portals');
        console.log('3. Get API keys and access tokens');
        console.log('4. Create secure API endpoints on your backend');
        console.log('5. Call those endpoints from this frontend');
    } catch (error) {
        console.error('Error fetching social media stats:', error);
    }
}

// Optional: Auto-refresh stats every 5 minutes
// Uncomment when backend is ready
// setInterval(fetchSocialMediaStats, 5 * 60 * 1000);