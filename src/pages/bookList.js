import { Link } from "react-router-dom";
import { BookShelf } from "../components/bookShelf";

export const BookList = ({ addedBooks, handleChange }) => {
  console.log(addedBooks)

  // console.log(addedBooks);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title={"Currently Reading"}
            books={addedBooks.filter((e) => {
              return e.shelf === "currentlyReading";
            })}
            handleChange={handleChange}
          />
          <BookShelf
            title={"Want to Read"}
            books={addedBooks.filter((e) => {
              return e.shelf === "wantToRead";
            })}
            handleChange={handleChange}
          />
          <BookShelf
            title={"Read"}
            books={addedBooks.filter((e) => {
              return e.shelf === "read";
            })}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};
