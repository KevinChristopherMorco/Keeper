import React from "react";

const Textarea = (props) => {
  return (
    <>
      <textarea
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default Textarea;
