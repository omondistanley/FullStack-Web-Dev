/*import React, { useState } from "react";

const buttonStyle = {
  position: "absolute",
  right: "18px",
  bottom: "-18px",
  background: "#f5ba13",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  outline: "none",
};

const noteStyle = {
  width: "100%",
  border: "none",
  padding: "4px",
  outline: "none",
  fontSize: "1.2em",
  fontFamily: "inherit",
  resize: "none",
};

const noteFormat = {
  position: "relative",
  width: "480px",
  margin: "30px auto 20px auto",
  background: "#fff",
  padding: "15px",
  borderRadius: "7px",
  boxShadow: "0 1px 5px rgb(138, 137, 137)",
};

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    fetch(
      "http://localhost:3010/notes",
      //"mongodb+srv:dimmed82:dimmed82@cluster0.bquhibd.mongodb.net/?retryWrites=true&w=majority",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        props.onAdd(data);
        setNote({
          title: "",
          content: "",
        });
      })
      .catch((error) => {
        console.error("Error adding note:", error);
      });

    event.preventDefault();
  }
  return (
    <div>
      <form style={noteFormat}>
        <input
          name="title"
          onChange={handleChange}
          style={noteStyle}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          style={noteStyle}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} style={buttonStyle}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
*/

import React, { useState } from "react";

const buttonStyle = {
  position: "absolute",
  right: "18px",
  bottom: "-18px",
  background: "#f5ba13",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "36px",
  height: "36px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
  cursor: "pointer",
  outline: "none"
};

const noteStyle = {
  width: "100%",
  border: "none",
  padding: "4px",
  outline: "none",
  fontSize: "1.2em",
  fontFamily: "inherit",
  resize: "none"
};

const noteFormat = {
  position: "relative",
  width: "480px",
  margin: "30px auto 20px auto",
  background: "#fff",
  padding: "15px",
  borderRadius: "7px",
  boxShadow: "0 1px 5px rgb(138, 137, 137)"
};

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form style={noteFormat}>
        <input
          name="title"
          onChange={handleChange}
          style={noteStyle}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          style={noteStyle}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} style={buttonStyle}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;