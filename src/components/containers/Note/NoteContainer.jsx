import { useState, useEffect } from "react";
import className from "./NoteContainer.module.css";
import Note, { AddNote } from "../../Note/Note";

const NoteContainer = () => {
  const [note, setNote] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const handleAddNote = (note) => {
    setNote((prevValue) => {
      return [...prevValue, note];
    });
  };

  const handleDeleteNote = (noteId) => {
    setNote(() => note.filter((x) => x.id !== noteId));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  return (
    <div className={className.container}>
      <AddNote handleAdd={handleAddNote} />
      {note.map((props, index) => {
        return (
          <Note
            key={index}
            id={props.id}
            header={props.header}
            content={props.content}
            handleDelete={handleDeleteNote}
          />
        );
      })}
    </div>
  );
};

export default NoteContainer;
