import style from './NoteContainer.module.css'
const NoteContainer = ({ children }) => {
  return (
    <div className={style.container}>
      { children }
    </div>
  )
};

export default NoteContainer;
