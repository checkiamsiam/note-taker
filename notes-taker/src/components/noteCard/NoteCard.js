import React from 'react';
import UpdateModal from '../updateModal/UpdateModal';


const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "80px",
  width: "80px",
};

const NoteCard = ({ note, handleDelete, recallApi, setRecallApi }) => {


  const handleUpdate = (e) => {
    e.preventDefault()
    const user_name = e.target.user_name.value;
    const text = e.target.text.value;
    const updatedData = { user_name, text };
    const url = `https://note-taker-server-1.herokuapp.com/notes/${note._id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => setRecallApi(!recallApi))
    e.target.user_name.value = ''
    e.target.text.value = ''
  }


  return (
    <div className="col mt-5" style={{ position: "relative" }}>
      <div className="rounded h-100 color-060930 note-card">
        <div
          className=" bg-warning  rounded-circle mx-auto mt-2"
          style={customStyles}
        >
          <p className="text-center p-2  fs-2 fw-bold text-dark">
            {" "}
            {note.user_name.substring(0, 1)}
          </p>
        </div>
        <div className="card-body mt-5">
          <h5 className="card-title">Author : {note.user_name}</h5>
          <p className="card-text">{note.text}</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <div>
            <button
              className="color-801336 btn btn-sm mx-2 "
              onClick={() => handleDelete(note._id)}
            >
              delete
            </button>
          </div>
          {/* <button>update</button> */}
          <UpdateModal handleUpdate={handleUpdate} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;