import React, { useEffect } from "react";

const Header = ({ state }) => {


  const handleSearch = (e) => {
    e.preventDefault()
    let url;
    if (e.target.searchText.value) {
      url = `https://note-taker-server-1.herokuapp.com/notes?user_name=${e.target.searchText.value}`;
    } else {
      url = 'https://note-taker-server-1.herokuapp.com/notes'
    }
    fetch(url)
      .then(res => res.json())
      .then(data => state(data))

    e.target.searchText.value = ''
  }


  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="fw-bold fs-5 text-white ">NOTES TAKER</span>


        <form className="d-flex" onSubmit={handleSearch}>

          <input
            className="form-control me-2"
            type="text"
            name="searchText"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn  btn-dark" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );



};

export default Header;
