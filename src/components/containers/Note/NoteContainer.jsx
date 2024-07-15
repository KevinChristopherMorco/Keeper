import { useState, useEffect, useCallback } from "react";
import className from "./NoteContainer.module.css";
import Note, { AddNote } from "../../Note/Note";
import { isEditable } from "@testing-library/user-event/dist/utils";

const NoteContainer = () => {
  const [note, setNote] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const handleAddNote = useCallback(
    (note) => {
      setNote((prevValue) => {
        return [...prevValue, note];
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

  const handleEdit = (id) => {
    setNote((prevValue) =>
      prevValue.map((note) =>
        note.id === id ? { ...note, isEditable: true } : note
      )
    );
  };

  const handleDiscard = (id) => {
    setNote((prevValue) =>
      prevValue.map((note) =>
        note.id === id ? { ...note, isEditable: false } : note
      )
    );
  };

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
  }, [note]);

  // const [hover, setHover] = useState(null);

  // const handleHover = useCallback((id) => {
  //   setHover(id);
  // });
  // const handleMouseOut = useCallback(() => {
  //   setHover(null);
  // });

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
            handleEdit={handleEdit}
            handleDelete={handleDeleteNote}
            handleChanges={handleChanges}
            handleDiscard={handleDiscard}
            isEditable={props.isEditable}
          />
        );
      })}
    </div>
  );
};

export default NoteContainer;
