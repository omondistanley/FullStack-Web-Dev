import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(
      "mongodb+srv:dimmed82:dimmed82@cluster0.bquhibd.mongodb.net/?retryWrites=true&w=majority",
    )
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  function addNote(newNote) {
    fetch(
      "mongodb+srv:dimmed82:dimmed82@cluster0.bquhibd.mongodb.net/?retryWrites=true&w=majority",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setNotes((prevNotes) => [...prevNotes, data]);
      });
  }

  function deleteNote(id) {
    //fetch(`http://localhost:3001/notes/${id}`, {
    fetch(
      `mongodb+srv://omondistanley82:<Stanley2002.>@cluster0.utiqesn.mongodb.net/?retryWrites=true&w=majority${id}`,
      {
        method: "DELETE",
      },
    ).then(() => {
      setNotes((prevNotes) =>
        prevNotes.filter((noteItem, index) => index !== id),
      );
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
