import { GlobalStyles } from "./components/Global.styles";
import NavBar from "./components/layout/NavBar";
import AddNote from "./components/notes/AddNote";
import Notes from "./components/notes/Notes";

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <NavBar />
        <AddNote />
        <Notes />
      </div>
    </>
  );
}

export default App;
