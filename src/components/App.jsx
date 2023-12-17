import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import note from "./notes";

function App() {
  const [notes, setNotes] = useState([note]);

  useEffect(() => {
    fetch(
      "mongodb+srv://dimmed82:dimmed82@notes-app.u33j0lc.mongodb.net/?retryWrites=true&w=majority",
    )
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);
  function addNote(newNote) {
    fetch(
      "http://localhost:3010/notes",
      // "mongodb+srv:dimmed82:dimmed82@cluster0.bquhibd.mongodb.net/?retryWrites=true&w=majority",
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
  /*
  function deleteNote(id) {
    fetch(`http://localhost:3001/notes/${id}`, {
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
  */
  function deleteNote(id) {
    fetch(`http://localhost:3010/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
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
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import note from "./notes";

function App() {
  const [notes, setNotes] = useState([note]);

  useEffect(() => {
    fetch(
      "mongodb+srv://dimmed82:dimmed82@notes-app.u33j0lc.mongodb.net/?retryWrites=true&w=majority",
    )
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);
  function addNote(newNote) {
    fetch(
      "http://localhost:3010/notes",
      // "mongodb+srv:dimmed82:dimmed82@cluster0.bquhibd.mongodb.net/?retryWrites=true&w=majority",
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
  /*
  function deleteNote(id) {
    fetch(`http://localhost:3001/notes/${id}`, {
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
  */
  function deleteNote(id) {
    fetch(`http://localhost:3010/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
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
