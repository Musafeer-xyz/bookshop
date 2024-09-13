document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    const products = [
        { name: 'The Quran', price: '$20' },
        { name: 'Hadith Collection', price: '$15' },
        { name: 'Islamic History', price: '$25' }
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });

    const nightModeToggle = document.getElementById('night-mode-toggle');
    nightModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('night-mode');
        nightModeToggle.textContent = document.body.classList.contains('night-mode') ? 'Day Mode' : 'Night Mode';
    });
});
