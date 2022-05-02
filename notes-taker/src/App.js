
import "./App.css";
import Header from "./components/header/Header";
import InputForm from "./components/inputForm/InputForm";
import NoteCard from "./components/noteCard/NoteCard";
import { useEffect, useState } from "react";



function App() {
  const [notes, setNotes] = useState([]);
  const [recallApi, setRecallApi] = useState(false);

  //get data from api
  useEffect(() => {

    fetch("https://note-taker-server-1.herokuapp.com/notes")
      .then(res => res.json())
      .then(data => setNotes(data))


  }, [recallApi]);
  /*
1. here there will be a function named handleSearch
to handle search by query, and it will be passed as props to header

  */

  // tast are complete in header.js files






  /*2. here there will be a function named handleDelete
  to delete a note, and it will be passed as props to NoteCard that will be triggered using delete button.
   */


  const handleDelete = (id) => {
    //for better user expreice 
    fetch(`https://note-taker-server-1.herokuapp.com/notes/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json()) // or res.text()
      .then(data => {
        setRecallApi(!recallApi)
      })
  }








  /*
3. there will be a function named handleUpdate
    to update data, and it will be passed as props to NoteCard and 
   later it will be passed to Update modal using props.
 */

  //this task is completed in noteCard.js file




  /*
4.  there will be a function named handlePost
to post data to backend, and it will be passed as props to InputFrom.
 */


  // this task is completed in inputForm.js file




  return (
    <div className="App">
      <Header state={setNotes} />
      <InputForm setRecallApi={setRecallApi} recallApi={recallApi} />
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        {notes.map((note) => (
          <NoteCard
            setRecallApi={setRecallApi}
            recallApi={recallApi}
            handleDelete={handleDelete}
            key={note._id}
            note={note}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
