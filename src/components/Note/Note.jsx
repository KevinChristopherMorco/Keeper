import React, { useState, useCallback } from "react";
import className from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import {
  faTrashCan,
  faPenToSquare,
  faSquareCheck,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

import Input from "../elements/Input";
import Textarea from "../elements/Textarea";

import { v4 } from "uuid";

const AddNote = (props) => {
  const timeAdded = new Date().getTime();

  const [inputValue, setInputValue] = useState({
    id: `${v4()}-${timeAdded}`,
    header: "",
    content: "",
    isEditable: false,
  });

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputValue((prevNote) => ({
        ...prevNote,
        [name]: value,
      }));
    },
    [inputValue]
  );

  const handleSubmit = useCallback(
    (e) => {
      props.handleAdd(inputValue);
      setInputValue({
        id: `${v4()}-${timeAdded}`,
        header: "",
        content: "",
        isEditable: false,
      });
      e.preventDefault();
    },
    [inputValue]
  );

  return (
    <div className={className.cardAdd}>
      <form onSubmit={handleSubmit}>
        <Input
          name="header"
          type="text"
          placeholder="A clever title..."
          value={inputValue.header}
          onChange={handleChange}
        />

        <Textarea
          name="content"
          placeholder="Write something amazing..."
          value={inputValue.content}
          onChange={handleChange}
        />
        <button className={className.addBtn} type="submit">
          <FontAwesomeIcon className="fa-2xl" icon={faCirclePlus} />
          Add your note
        </button>
      </form>
    </div>
  );
};

const Note = (props) => {
  const handleDelete = useCallback(() => props.handleDelete(props.id));
  const handleEdit = useCallback(() => props.handleEdit(props.id));
  const { header, content, isEditable } = props;

  const [note, setNote] = useState({
    header: props.header,
    content: props.content,
  });

  const onChange = (event) => {
    console.log(event.target.value);
    setNote((prev) => {
      const { name, value } = event.target;
      return {
        ...note,
        [name]: value,
      };
    });
  };

  const save = (event) => {
    const { header, content } = note;
    props.handleChanges(props.id, header, content);
  };
  return (
    <div className={className.card}>
      <div className={className.headingContainer}>
        {isEditable ? (
          <Input
            name="header"
            className={className.noteEdit}
            value={note.header}
            onChange={onChange}
          />
        ) : (
          <p className={className.heading}>{header}</p>
        )}
      </div>
      <div className={className.contentContainer}>
        {isEditable ? (
          <Textarea
            name="content"
            className={className.noteEdit}
            value={note.content}
            onChange={onChange}
          />
        ) : (
          <p className={className.content}>{content}</p>
        )}
      </div>
      <div className={className.buttonContainer}>
        <button
          className={isEditable ? className.saveBtn : className.editBtn}
          onClick={isEditable ? save : handleEdit}
        >
          <FontAwesomeIcon
            className="fa-xl"
            icon={isEditable ? faSquareCheck : faPenToSquare}
          />
          {isEditable ? "Save" : "Edit"}
        </button>
        <button className={className.deleteBtn} onClick={handleDelete}>
          <FontAwesomeIcon
            className="fa-xl"
            icon={isEditable ? faXmarkCircle : faTrashCan}
          />
          {isEditable ? "Discard" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default Note;
export { AddNote };
