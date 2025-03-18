import React from "react";
import BookCard from "./components/bookcard"; // Updated path

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", cover: "https://example.com/gatsby.jpg" },
  { title: "1984", author: "George Orwell", cover: "https://example.com/1984.jpg" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", cover: "https://example.com/mockingbird.jpg" }
];

const App = () => {
  return (
    <div className="book-container">
      {books.map((book, index) => (
        <BookCard key={index} title={book.title} author={book.author} cover={book.cover} />
      ))}
    </div>
  );
};

export default App;
