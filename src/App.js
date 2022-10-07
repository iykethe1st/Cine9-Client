import { Redirect, Route, Switch } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/common/loginForm";
import RegisterForm from "./components/common/registerForm";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import ErrorPage from "./components/common/errorPage";
import "./App.css";

function App() {
  return (
    <main className="">
      <NavBar />

      <div className="container">
        <Switch>
          {/* <Route path="/movies/new" component={MovieForm}></Route> */}
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={ErrorPage} />
          <Redirect exact from="/" to="/movies"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    </main>
  );
}

export default App;
