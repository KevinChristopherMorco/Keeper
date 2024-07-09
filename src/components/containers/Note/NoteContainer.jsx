import { useState, useEffect } from "react";
import className from "./NoteContainer.module.css";
import Note, { AddNote } from "../../Note/Note";

const populateCard = (props) => {
  return <Note key={props.id} header={props.header} content={props.content} />;
};

const NoteContainer = (props) => {
  const [note, setNote] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const handleAddNote = (test) => {
    setNote((prevValue) => {
      return [...prevValue, test];
    });
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  return (
    <div className={className.container}>
      <AddNote handle={handleAddNote} />
      {note.map(populateCard)}
    </div>
  );
};

export default NoteContainer;
