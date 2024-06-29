import React from "react";
import className from "./Note.module.css";

const Note = () => {
  return (
    <div className={className.card}>
      <div className={className.headingContainer}>
        <p className={className.heading}>Heading</p>
      </div>
      <div className={className.contentContainer}>
        <p className={className.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          delectus cumque animi corrupti consequuntur nisi totam sequi expedita
          nihil quaerat? Ut aspernatur harum sit cumque quo? Praesentium
          aspernatur adipisci necessitatibus.
        </p>
      </div>
    </div>
  );
};

export default Note;
