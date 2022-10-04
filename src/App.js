import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Movies />
    </main>
  );
}

export default App;
