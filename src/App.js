import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className='main'>
      <NavBar />
      <div className='wrapper'>
  
        <Main />
      </div>
    </div>
  );
}

export default App;
