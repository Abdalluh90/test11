// Initialize AOS Library
AOS.init();

// Hide loader after page load
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});

// Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle Navbar for Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Toggle Dark Mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Search Bar Functionality
const searchForm = document.querySelector('.search-bar');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const query = searchForm.querySelector('input').value.trim();
    if (query) {
        alert(`You searched for: ${query}`);
        // You can replace the alert with actual search functionality
    } else {
        alert('Please enter a search term.');
    }
});

// Dynamic Podcast Filtering (Optional)
// This function allows users to filter podcasts based on categories
function filterPodcasts(category) {
    const podcastItems = document.querySelectorAll('.podcast-item');
    podcastItems.forEach(item => {
        const title = item.querySelector('h4').textContent.toLowerCase();
        if (category === 'all' || title.includes(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Example: Add buttons to filter podcasts by category
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            filterPodcasts(category);
        });
    });
});