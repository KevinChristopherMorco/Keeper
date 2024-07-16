import React, { useState, useCallback, useEffect } from "react";
import className from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import {
  faTrashCan,
  faPenToSquare,
  faSquareCheck,
  faXmarkCircle,
  faFloppyDisk,
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
      });
      setTextArea(false);
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
          placeholder="Think of your awesome title..."
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

const Note = ({ id, header, content, handleDelete, handleChange }) => {
  const [note, setNote] = useState({
    header: header,
    content: content,
  });

  const [isEditable, setEditable] = useState(false);

  const handleEdit = () => {
    setEditable(true);
  };

  const discardChanges = useCallback(() => {
    setEditable(false);

    setNote(() => {
      return {
        header: header,
        content: content,
      };
    });
  });

  const onChange = (event) => {
    setNote(() => {
      const { name, value } = event.target;
      return {
        ...note,
        [name]: value,
      };
    });
  };

  const saveChanges = () => {
    const { header, content } = note;
    handleChange(id, header, content);
    setEditable(false);
  };

  const [isHover, setHovers] = useState(false);

  const handleHover = useCallback((event) => {
    const { type } = event;
    type === "mouseover" ? setHovers(true) : setHovers(false);
  });

  return (
    <div
      className={className.card}
      onMouseOut={handleHover}
      onMouseOver={handleHover}
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
          isHover
            ? className.buttonContainerDisplay
            : className.buttonContainerNone
        } ${
          isEditable
            ? className.buttonContainerEdit
            : className.buttonContainerNotEdit
        }`}
      >
        <button
          className={isEditable ? className.saveBtn : className.editBtn}
          onClick={isEditable ? saveChanges : handleEdit}
        >
          <FontAwesomeIcon
            className="fa-xl"
            icon={isEditable ? faFloppyDisk : faPenToSquare}
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
          {isEditable ? "Cancel" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default Note;
export { AddNote };
