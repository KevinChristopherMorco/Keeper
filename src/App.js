import logo from "./logo.svg";
import "./global/root-css.module.css";

import Header from "./components/Header/Header";
import NoteContainer from "./components/containers/Note/NoteContainer";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <NoteContainer>
        <Note />
        <Note />
      </NoteContainer>
      <Footer />
    </div>
  );
}

export default App;
