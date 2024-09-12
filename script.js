// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const bookContainer = document.getElementById('bookContainer');

    const books = [
        {
            title: 'Book One',
            author: 'Author One',
            cover: 'images/book1.jpg'
        },
        {
            title: 'Book Two',
            author: 'Author Two',
            cover: 'images/book2.jpg'
        },
        // Add more book objects here
    ];

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
        `;
        bookContainer.appendChild(bookDiv);
    });

    document.getElementById('shopNow').addEventListener('click', () => {
        alert('Redirecting to shop...');
        // Redirect to catalog page or handle shopping functionality
    });
});
