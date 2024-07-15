import React from "react";

const Textarea = (props) => {
  return (
    <>
      <textarea
        className={props.className}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        style={props.style}
      />
    </>
  );
};

export default Textarea;
