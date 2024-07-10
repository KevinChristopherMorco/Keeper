import React, { useEffect, useState } from "react";
import className from "./Note.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import Input from "../elements/Input";
import Textarea from "../elements/Textarea";

import { v4 } from "uuid";

const AddNote = (props) => {
  const [inputValue, setInputValue] = useState({
    id: v4(),
    header: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInputValue((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function onSubmit(e) {
    props.handleAdd(inputValue);
    setInputValue({ id: v4(), header: "", content: "" });
    e.preventDefault();
  }

  return (
    <div className={className.cardAdd}>
      <form action="" onSubmit={onSubmit}>
        <Input
          name="header"
          type="text"
          placeholder="Title"
          value={inputValue.header}
          onChange={handleChange}
        />

        <Textarea
          name="content"
          placeholder="Take a note..."
          value={inputValue.content}
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
  function onSubmitDelete(e) {
    props.handleDelete(props.id);
  }
  return (
    <div className={className.card}>
      <div className={className.headingContainer}>
        <p className={className.heading}>{props.header}</p>
      </div>
      <div className={className.contentContainer}>
        <p className={className.content}>{props.content}</p>
      </div>
      <FontAwesomeIcon
        onClick={onSubmitDelete}
        className="fa-sm"
        icon={faTrashCan}
      />
    </div>
  );
};

export default Note;
export { AddNote };
