import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Movies from "./components/movies";

function App() {
  return (
    <main className="container">
      <Movies />
    </main>
  );
}

export default App;
