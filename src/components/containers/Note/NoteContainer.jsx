import { useState, useEffect, useCallback } from "react";
import className from "./NoteContainer.module.css";
import { AddNote, Note } from "../../Note/Note";
import swal from "sweetalert";
import Masonry from "react-masonry-css";
import { SuccessfulAlert, DangerAlert } from "../../Alert/SweetAlert";

const NoteContainer = () => {
  const [note, setNote] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  //CRUD

  const handleAddNote = useCallback(
    (note) => {
      setNote((prevValue) => {
        return [note, ...prevValue];
      });
    },
    [note]
  );

  const handleDeleteNote = useCallback(
    (id) => {
      const deleteNote = () => setNote(() => note.filter((x) => x.id !== id));
      DangerAlert(
        "Confirm deletion of your note?",
        "You have deleted a note!",
        "warning",
        false,
        deleteNote
      );
    },
    [note]
  );

  const handleChanges = useCallback((id, header, content) => {
    SuccessfulAlert();
    setNote((prevValue) =>
      prevValue.map((note) =>
        note.id === id ? { ...note, header: header, content: content } : note
      )
    );
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(note));
  }, [note]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className={className.noteContainer}>
      <AddNote handleAdd={handleAddNote} />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={className.myMasonryGrid}
        columnClassName={className.myMasonryGridColumn}
      >
        {note.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              header={note.header}
              content={note.content}
              handleDelete={() => handleDeleteNote(note.id)}
              handleChange={handleChanges}
            />
          );
        })}
      </Masonry>
    </div>
  );
};

export default NoteContainer;
