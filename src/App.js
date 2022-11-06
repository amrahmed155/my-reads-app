import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "./pages/search";
import { getAll,update } from "./BooksAPI";
import { BookList } from "./pages/bookList";

function App() {

  const [addedBooks, setaddedBooks] = useState([]);
  const addObjectToArray = (moveToList,obj) => {
    
    setaddedBooks(current => [...current, {...obj,shelf:moveToList }]);
  };

  // ✅ Update one or more objects in a state array
  const updateObjectInArray = (moveToList, bookData) => {
    setaddedBooks(current =>
      current.map(obj => {
        if (obj.id ===bookData.id) {
          return {...obj, shelf: moveToList};
        }
  
        return obj;
      }),
    );
  };
  
  useEffect(() => {
      getAll().then(e=>setaddedBooks(e))
  }, []);


  const handleChange = (moveToList, bookData) => {
    // get(bookData.id).then((e)=>{alert(`The book currently exist in (${e.shelf}) shelf and it will be moved to (${moveToList}) shelf`)}).then(()=>{
  
    update(bookData,moveToList)
    const isFound = addedBooks.some(element => {
      if (element.id === bookData.id) {
        return true;
      }
return false    
    });
    if (isFound){        updateObjectInArray  (moveToList, bookData)    }
    else{        addObjectToArray  (moveToList, bookData)    }
  // })
    

  };
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <BookList addedBooks={addedBooks} handleChange={handleChange} />
          }
        />
        <Route
          path="/search"
          element={<Search handleChange={handleChange} addedBooks={addedBooks}/>}
        />
      </Routes>
      {/* {showSearchPage ? (
        <Search swapPage={swapPage} handleChange={handleChange} />
      ) : (

      )} */}
    </div>
  );
}

export default App;
