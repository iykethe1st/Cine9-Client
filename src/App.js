import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Logout from "./components/logout";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/common/loginForm";
import RegisterForm from "./components/common/registerForm";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import ErrorPage from "./components/common/errorPage";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = auth.getCurrentUser();
    setCurrentUser(user);
  }, []);
  return (
    <main className="">
      <NavBar user={currentUser} />
      <div className="container">
        <ToastContainer />
        <Switch>
          {/* <Route path="/movies/new" component={MovieForm}></Route> */}
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/logout" component={Logout}></Route>
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
