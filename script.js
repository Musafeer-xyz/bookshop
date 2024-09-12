// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const bookContainer = document.getElementById('bookContainer');

    const books = [
        {
            title: 'The Book of Knowledge',
            author: 'John Doe',
            cover: 'images/book1.jpg'
        },
        {
            title: 'Learning Python',
            author: 'Jane Smith',
            cover: 'images/book2.jpg'
        },
        {
            title: 'Introduction to JavaScript',
            author: 'Alice Johnson',
            cover: 'images/book3.jpg'
        },
        {
            title: 'Web Development Essentials',
            author: 'Bob Brown',
            cover: 'images/book4.jpg'
        }
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
        alert('Redirecting to catalog...');
        // Replace with actual redirection if needed
    });
});
