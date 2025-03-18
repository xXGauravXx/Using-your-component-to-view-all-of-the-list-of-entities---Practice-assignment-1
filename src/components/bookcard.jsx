// write the book component code here
import React from "react";

const BookCard = ({ title, author, cover }) => {
  return (
    <div className="book-card">
      <img src={cover} alt={title} className="book-cover" />
      <h3>{title}</h3>
      <p>by {author}</p>
    </div>
  );
};

export default BookCard;
