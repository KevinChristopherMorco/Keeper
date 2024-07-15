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

  const [input, setInput] = useState({
    id: `${v4()}-${timeAdded}`,
    header: "",
    content: "",
    isEditable: false,
  });
  const [showTextArea, setTextArea] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInput((prevNote) => ({
        ...prevNote,
        [name]: value,
      }));

      if (value === "" && (input.header === "" || input.content === "")) {
        setTextArea(false);
      } else {
        setTextArea(true);
      }
    },
    [input]
  );

  const handleSubmit = useCallback(
    (e) => {
      props.handleAdd(input);
      setInput({
        id: `${v4()}-${timeAdded}`,
        header: "",
        content: "",
        isEditable: false,
      });
      e.preventDefault();
    },
    [input]
  );

  return (
    <div
      className={`${className.cardAdd} ${
        showTextArea ? className.cardShow : className.cardHide
      }`}
    >
      <form onSubmit={handleSubmit}>
        <Input
          name="header"
          type="text"
          placeholder="A clever title..."
          value={input.header}
          onChange={handleChange}
        />

        <div
          className={
            showTextArea
              ? className.textAreaContainerShow
              : className.textAreaContainerHide
          }
        >
          <Textarea
            name="content"
            placeholder="Write something amazing..."
            value={input.content}
            onChange={handleChange}
          />
          <button className={className.addBtn} type="submit">
            <FontAwesomeIcon className="fa-2xl" icon={faCirclePlus} />
            Add your note
          </button>
        </div>
      </form>
    </div>
  );
};

const Note = (props) => {
  const { header, content, isEditable } = props;

  const [note, setNote] = useState({
    header: props.header,
    content: props.content,
  });

  const handleDelete = useCallback(() => props.handleDelete(props.id));
  const handleEdit = useCallback(() => props.handleEdit(props.id));
  const discardChanges = useCallback(() => {
    props.handleDiscard(props.id);
    setNote(() => {
      return {
        header: props.header,
        content: props.content,
      };
    });
  });

  const onChange = (event) => {
    setNote((prev) => {
      const { name, value } = event.target;
      return {
        ...note,
        [name]: value,
      };
    });
  };

  const saveChanges = () => {
    const { header, content } = note;
    props.handleChanges(props.id, header, content);
  };

  return (
    <div
      className={className.card}
      onMouseOut={props.handleOut}
      onMouseOver={props.handleHover}
    >
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
      <div
        className={`${className.buttonContainer} ${
          props.isHover
            ? className.buttonContainerDisplay
            : className.buttonContainerNone
        }`}
      >
        <button
          className={isEditable ? className.saveBtn : className.editBtn}
          onClick={isEditable ? saveChanges : handleEdit}
        >
          <FontAwesomeIcon
            className="fa-xl"
            icon={isEditable ? faSquareCheck : faPenToSquare}
          />
          {isEditable ? "Save" : "Edit"}
        </button>
        <button
          className={className.deleteBtn}
          onClick={isEditable ? discardChanges : handleDelete}
        >
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
