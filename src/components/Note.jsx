import React, { useState } from "react";


const buttonStyle = {
  position: "relative",
  float: "right",
  marginRight: "10px",
  color: "#f5ba13",
  border: "none",
  width: "36px",
  height: "36px",
  cursor: "pointer",
  outline: "none",
}

function Note(props) {
  //const [content, setContent] = useState(props.content);
  const [content, setContent] = useState(props.content);
  
  function handleContentChange(event) {
    setContent(event.target.value);
  }
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <textarea value={content} onChange={handleContentChange}></textarea>
      <button onClick={handleClick} style={buttonStyle}>
        DELETE
      </button>
    </div>
  );
}

export default Note;
