import React, { useEffect, useState } from "react";
import className from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AddNote = (props) => {
  const [note, setNote] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const [inputValue, setInputValue] = useState({ header: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    props.handle(inputValue);
    e.preventDefault();
  }

  return (
    <div className={className.cardAdd}>
      <form action="" onSubmit={onSubmit}>
        <input
          name="header"
          type="text"
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
        />
        <button type="submit">
          <FontAwesomeIcon className="fa-xl" icon={faCirclePlus} />
        </button>
      </form>
    </div>
  );
};

const Note = (props) => {
  console.log(props.header);
  return (
    <div className={className.card}>
      <div className={className.headingContainer}>
        <p className={className.heading}>{props.header}</p>
      </div>
      <div className={className.contentContainer}>
        <p className={className.content}>{props.content}</p>
      </div>
      <FontAwesomeIcon className="fa-sm" icon={faTrashCan} />
    </div>
  );
};

export default Note;
export { AddNote };
