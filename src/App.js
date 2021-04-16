mport React from "react";
import "./styles.css";
import { useState } from "react";

const showsDB = {
  fiction: [
    { name: "Game Of Thrones", rating: "4.6/5" },
    { name: "Stranger Things", rating: "4.0/5" },
    { name: "Dark", rating: "4.6/5" }
  ],

  thriller: [
    {
      name: "Breaking Bad",
      rating: "4.8/5"
    },
    {
      name: "Mr. Robot",
      rating: "3.9/5"
    }
  ],
  comedy: [
    {
      name: "Friends",
      rating: "4.5/5"
    },
    {
      name: "Silicon Valley",
      rating: "4.3/5"
    },
    {
      name: "Big Bang Theory",
      rating: "3.8/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("fiction");

  function genreClickHandler(clickedGenre) {
    setGenre(clickedGenre);
  }

  return (
    <div className="App">
      <div style={{ margin: "0", border: "2px solid #1a508b" }}>
        <h1> 🎦 goodshows </h1>
        <p style={{ fontSize: "small" }}>
          {" "}
          Checkout my favorite shows. Select a genre to get started{" "}
        </p>
      </div>

      <div style={{ background: "#1a508b" }}>
        {Object.keys(showsDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#fff",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "2px solid #0d335d",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", marginLeft: "20%" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {showsDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                color: "white",
                backgroundColor: "#0d335d",
                listStyle: "none",
                padding: "1rem",
                border: "2px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "1.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
