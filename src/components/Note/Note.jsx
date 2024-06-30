import React from "react";
import className from "./Note.module.css";

const Note = (props) => {
  return (
    <div className={className.card}>
      <div className={className.headingContainer}>
        <p className={className.heading}>{props.header}</p>
      </div>
      <div className={className.contentContainer}>
        <p className={className.content}>{props.content}</p>
      </div>
    </div>
  );
};

export default Note;
