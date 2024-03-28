// Sample books 
let books = [
    { id: 1, name: "Book 1", image: "book1.jpg" },
    { id: 2, name: "Book 2", image: "book2.jpg" },
];

// Function to display books
function displayBooks(books) {
    const bookContainer = document.getElementById("bookContainer");
    bookContainer.innerHTML = "";
    books.forEach(book => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.name}">
            <h3>${book.name}</h3>
            <button class="editBtn" data-id="${book.id}">Edit</button>
            <button class="deleteBtn" data-id="${book.id}">Delete</button>
        `;
        bookContainer.appendChild(bookDiv);
    });
}

// Function to filter books
function filterBooks(filterValue) {
    const filteredBooks = books.filter(book => {
        return book.name.toLowerCase().includes(filterValue.toLowerCase()) ||
               book.id.toString().includes(filterValue.toLowerCase());
    });
    displayBooks(filteredBooks);
}

// Event listener for filter button
document.getElementById("filterBtn").addEventListener("click", function() {
    const filterInput = document.getElementById("filterInput").value;
    filterBooks(filterInput);
});

// Event listener for add book button
document.getElementById("addBookBtn").addEventListener("click", function() {
    document.getElementById("modalTitle").textContent = "Add Book";
    document.getElementById("modal").style.display = "block";
});

// Event listener for close button in modal
document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

// Event listener for save book button
document.getElementById("saveBookBtn").addEventListener("click", function(event) {
    event.preventDefault();
    const bookName = document.getElementById("bookName").value;
    const bookImage = document.getElementById("bookImage").value;
    if (bookName && bookImage) {
        const newBook = { id: books.length + 1, name: bookName, image: bookImage };
        books.push(newBook);
        displayBooks(books);
        document.getElementById("modal").style.display = "none";
        document.getElementById("bookForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Initial display of books
displayBooks(books);
