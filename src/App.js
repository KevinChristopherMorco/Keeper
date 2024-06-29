import logo from './logo.svg';
import './global/root-css.module.css';

import Header from './components/Header/Header';
import NoteContainer from './components/Note/NoteContainer';
import Note from './components/Note/Note';

function App() {
  return (
    <div className="App">
      <Header />
      <NoteContainer>
      <Note />
      <Note />
      </NoteContainer>
    </div>
  );
}

export default App;
