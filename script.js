// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const bookContainer = document.getElementById('bookContainer');
    const bookModal = document.getElementById('bookModal');
    const modalClose = document.querySelector('.close');
    const modalBookCover = document.getElementById('modalBookCover');
    const modalBookTitle = document.getElementById('modalBookTitle');
    const modalBookAuthor = document.getElementById('modalBookAuthor');
    const modalBookDescription = document.getElementById('modalBookDescription');

    const books = [
        {
            title: 'The Book of Knowledge',
            author: 'John Doe',
            cover: 'images/book1.jpg',
            description: 'A fascinating exploration of Islamic knowledge and its relevance in today’s world.'
        },
        {
            title: 'Learning Python',
            author: 'Jane Smith',
            cover: 'images/book2.jpg',
            description: 'An in-depth guide to learning Python for programming and development.'
        },
        {
            title: 'Introduction to JavaScript',
            author: 'Alice Johnson',
            cover: 'images/book3.jpg',
            description: 'Everything you need to start learning JavaScript and web development.'
        },
        {
            title: 'Web Development Essentials',
            author: 'Bob Brown',
            cover: 'images/book4.jpg',
            description: 'A complete guide to mastering web development using modern technologies.'
        }
    ];

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title} Cover">
            <h3>${book.title}</h3>
        `;
        
        // Click event to open modal
        bookDiv.addEventListener('click', () => {
            modalBookCover.src = book.cover;
            modalBookTitle.textContent = book.title;
            modalBookAuthor.textContent = `By ${book.author}`;
            modalBookDescription.textContent = book.description;
            bookModal.style.display = 'block';
        });

        bookContainer.appendChild(bookDiv);
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        bookModal.style.display = 'none';
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (event) => {
        if (event.target === bookModal) {
            bookModal.style.display = 'none';
        }
    });

    // Shop now button interaction
    document.getElementById('shopNow').addEventListener('click', () => {
        window.location.href = '#bookContainer';
    });
});
