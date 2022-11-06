export const Book = ({ book, handleChange }) => {
  return (
    <li className={""}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${
                book.imageLinks ? book.imageLinks.thumbnail : ""
              }")`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
             value={book.shelf ? book.shelf : "none"}
             onChange={(event) => {
               handleChange(event.target.value, book);
             }}>
              <option value="none" disabled> Move to... </option>

              <option value={'currentlyReading'}  >Currently Reading</option>
              <option  value={'wantToRead'}  > Want to Read</option>
              <option value={'read'}>  Read</option>
              <option value={'none'}> none   </option>
           
             
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{String(book.authors)}</div>
      </div>
    </li>
  );
};
