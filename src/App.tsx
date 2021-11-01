import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router";
import Post from "./components/Post";
import Home from "./components/Home";
import Create from "./components/Create";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={"/"} exact={true} component={Home} />
          <Route path={"/post/:postId"} component={Post} />
          <Route path={"/edit/:postId"} component={Create} />
          <Route  path={"/create"} component={Create} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
