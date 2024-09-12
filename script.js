const books = [
    { id: 1, title: "The Quran", author: "Various", category: "Islamic", price: 24.99, image: "images/book1.jpg" },
    { id: 2, title: "Hadith Collection", author: "Various", category: "Islamic", price: 29.99, image: "images/book2.jpg" },
    { id: 3, title: "Islamic History", author: "Various", category: "Islamic", price: 19.99, image: "images/book3.jpg" },
    { id: 4, title: "Understanding Islam", author: "Various", category: "Islamic", price: 14.99, image: "images/book4.jpg" }
];

const cart = [];
const bookList = document.getElementById('book-list');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const carouselContainer = document.getElementById('carousel-container');

function displayFeaturedBooks() {
    books.forEach(book => {
        const slide = document.createElement('div');
        slide.classList.add('book-slide');
        slide.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
        `;
        carouselContainer.appendChild(slide);
    });
}

function displayBooks(booksToDisplay) {
    bookList.innerHTML = '';
    booksToDisplay.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookItem);
    });
}

function addToCart(id) {
    const book = books.find(book => book.id === id);
    cart.push(book);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(book => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${book.title} - $${book.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += book.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

function filterCategory(category) {
    const filteredBooks = books.filter(book => book.category === category);
    displayBooks(filteredBooks);
}

document.getElementById('searchBar').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchText) || 
        book.author.toLowerCase().includes(searchText)
    );
    displayBooks(filteredBooks);
});

// Initialize page
displayBooks(books);
displayFeaturedBooks();
