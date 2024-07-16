import { useState, useEffect, useCallback } from "react";
import className from "./NoteContainer.module.css";
import Note, { AddNote } from "../../Note/Note";

const NoteContainer = () => {
  const [note, setNote] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  //CRUD

  const handleAddNote = useCallback(
    (note) => {
      setNote((prevValue) => {
        const previousValue = [...prevValue].reverse();
        return [note, ...previousValue];
      });
    },
    [note]
  );

  const handleDeleteNote = useCallback(
    (noteId) => {
      alert("Delete note?");
      setNote(() => note.filter((x) => x.id !== noteId));
    },
    [note]
  );

  const handleChanges = (id, header, content) => {
    setNote((prevValue) =>
      prevValue.map((note) =>
        note.id === id
          ? { ...note, header: header, content: content, isEditable: false }
          : note
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
    console.log(note);
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
            handleChanges={handleChanges}
          />
        );
      })}
    </div>
  );
};

export default NoteContainer;
