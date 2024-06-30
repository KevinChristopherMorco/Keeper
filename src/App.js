import logo from "./logo.svg";
import style from "./global/root-css.module.css";

import Header from "./components/Header/Header";
import NoteContainer from "./components/containers/Note/NoteContainer";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";

import notes from "./json/notes.json"; // Adjust the path as per your project structure

const populateCard = (note) => {
  return <Note key={note.id} header={note.header} content={note.content} />;
};

function App() {
  return (
    <div className={style.app}>
      <Header />
      <NoteContainer>{notes.map(populateCard)}</NoteContainer>
      <Footer />
    </div>
  );
}

export default App;
