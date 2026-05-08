// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Modern Web Development",
        excerpt: "Learn the essential tools and frameworks every developer should know in 2024.",
        date: "2024-01-15",
        category: "Development",
        image: "💻"
    },
    {
        id: 2,
        title: "The Power of CSS Grid and Flexbox",
        excerpt: "Master responsive layouts with modern CSS techniques.",
        date: "2024-01-12",
        category: "CSS",
        image: "🎨"
    },
    {
        id: 3,
        title: "JavaScript ES2024 Features You Need to Know",
        excerpt: "Explore the latest JavaScript features that will change how you code.",
        date: "2024-01-10",
        category: "JavaScript",
        image: "⚡"
    },
    {
        id: 4,
        title: "Building Fast Websites with Next.js",
        excerpt: "A complete guide to server-side rendering and static site generation.",
        date: "2024-01-08",
        category: "React",
        image: "🚀"
    },
    {
        id: 5,
        title: "Design Trends for 2024",
        excerpt: "Stay ahead of the curve with these emerging design patterns.",
        date: "2024-01-05",
        category: "Design",
        image: "✨"
    },
    {
        id: 6,
        title: "Performance Optimization Techniques",
        excerpt: "Practical tips to make your websites lightning fast.",
        date: "2024-01-03",
        category: "Performance",
        image: "⚡"
    }
];

// DOM elements
const postsGrid = document.getElementById('postsGrid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const ctaButton = document.querySelector('.cta-button');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderPosts();
    setupNavbar();
    setupScrollAnimations();
    setupSmoothScroll();
});

// Render blog posts
function renderPosts() {
    postsGrid.innerHTML = blogPosts.map(post => `
        <article class="post-card fade-in" data-delay="${Math.random() * 0.3}">
            <div class="post-image">${post.image}</div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <div class="post-meta">
                    <span>${formatDate(post.date)}</span>
                    <span>•</span>
                    <span>${post.category}</span>
                </div>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Read more →</a>
            </div>
        </article>
    `).join('');
}

// Navbar functionality
function setupNavbar() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animationDelay = `${index * 0.1}s`;
                    entry.target.classList.add('fade-in');
                }, 100);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.post-card').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// CTA button scroll to posts
ctaButton.addEventListener('click', () => {
    document.getElementById('blog').scrollIntoView({
        behavior: 'smooth'
    });
});

// Utility function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});