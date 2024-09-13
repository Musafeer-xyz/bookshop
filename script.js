document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const cartList = document.querySelector('.cart-list');
    const cart = [];
    
    const products = [
        { id: 1, name: 'The Quran', price: 20, category: 'quran' },
        { id: 2, name: 'Hadith Collection', price: 15, category: 'hadith' },
        { id: 3, name: 'Islamic History', price: 25, category: 'history' },
        { id: 4, name: 'Children’s Quran', price: 18, category: 'children' }
    ];

    function renderProducts(category = '') {
        productList.innerHTML = '';
        const filteredProducts = category ? products.filter(p => p.category === category) : products;
        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    function renderCart() {
        cartList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span>${item.name} - $${item.price}</span>
                <button data-id="${item.id}">Remove</button>
            `;
            cartList.appendChild(cartItem);
        });
    }

    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            renderCart();
        }
    });

    cartList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const index = cart.findIndex(p => p.id === productId);
            if (index > -1) {
                cart.splice(index, 1);
                renderCart();
            }
        }
    });

    const categoryButtons = document.querySelectorAll('.category-list button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');
            renderProducts(category);
        });
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

    // Initial render of products
    renderProducts();
});
