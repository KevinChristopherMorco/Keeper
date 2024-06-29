import className from "./NoteContainer.module.css";
const NoteContainer = ({ children }) => {
  return <div className={className.container}>{children}</div>;
};

export default NoteContainer;
