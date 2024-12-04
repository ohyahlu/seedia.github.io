// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add hover effects for product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 5px 15px rgba(57, 255, 20, 0.2)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Add click handlers for buttons
const shopNowBtn = document.querySelector('.hero button');
shopNowBtn.addEventListener('click', () => {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
});

const learnMoreBtns = document.querySelectorAll('.product-card button');
learnMoreBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`Learn more about ${productName}! (Product details would be shown here)`);
    });
});

// Add a subtle animation for the header on scroll
let lastScrollPosition = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScrollPosition = window.pageYOffset;
    
    if (currentScrollPosition > lastScrollPosition) {
        header.style.transform = 'translateY(-100%)';
        header.style.transition = 'transform 0.3s ease';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollPosition = currentScrollPosition;
});

// Add loading animation for images
document.querySelectorAll('.product-card img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    img.addEventListener('load', () => {
        img.style.opacity = '1';
    });
});
