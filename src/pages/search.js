import { useState } from "react";
import { Link } from "react-router-dom";

import { search } from "../BooksAPI";
import { Book } from "../components/book";
export const Search = ({ handleChange,addedBooks }) => {

  const [searchVal, setsearchVal] = useState("");
  const [searchResult, setsearchResult] = useState({});
  const [ErrorResult, setErrorResult] = useState(false);
  const handleSearchTextChange = (e) => {
    setsearchVal(e.target.value);
    if (e.target.value !== "") {
      search(e.target.value, 100).then((data) => {
        if ("error" in data) {
          setErrorResult(true);
          setsearchResult({});
        } else {
          setErrorResult(false);
          setsearchResult(data);
        }
      });
    } else {
      setsearchResult({});
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={searchVal}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearchTextChange}
          />
        </div>
      </div>

      {ErrorResult ? (
        <div className="search-books-results">
          <ol className="books-grid">
            <div>Please Enter A Correct Book Name</div>
          </ol>
        </div>
      ) : (
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult &&
            Object.keys(searchResult).length === 0 &&
            Object.getPrototypeOf(searchResult) === Object.prototype ? (
              <div>Please Enter A Book Name</div>
            ) : (
              searchResult.map((e) => {
                return (
                  <Book
                    key={e.id}
                    currentList={"search"}
                    handleChange={handleChange}
                    book={e}
                    addedBooks={addedBooks}
                  />
                );
              })
            )}
          </ol>
        </div>
      )}
    </div>
  );
};
