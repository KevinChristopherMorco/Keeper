import { useEffect, useState } from "react";
import logo from "./logo.svg";
import style from "./global/root-css.module.css";

import Header from "./components/Header/Header";
import NoteContainer from "./components/containers/Note/NoteContainer";
import Note, { AddNote } from "./components/Note/Note";
import Footer from "./components/Footer/Footer";

import notes from "./json/notes.json";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <NoteContainer></NoteContainer>
      <Footer />
    </div>
  );
}

export default App;
