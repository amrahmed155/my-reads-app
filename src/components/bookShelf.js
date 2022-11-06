import { Book } from "./book";
export const BookShelf = ({ title, books, handleChange }) => {

  return (
    <div className="bookshelf">
      {/* {books.length > 0 ? (//used to render shelfs with books in it not empty shelfs  */}
        <div>
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books &&
              Object.keys(books).length === 0 &&
              Object.getPrototypeOf(books) === Object.prototype ? (
                <div>dam</div>
              ) : (
                books.map((e) => {
                  return (
                    <Book key={e.id} book={e} handleChange={handleChange} />
                  );
                })
              )}
            </ol>
          </div>
        </div>
      {/* // ) : (
      //   <div></div>//place empty div or null
      // )} */}
    </div>
  );
};
