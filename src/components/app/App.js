import "./App.css";
import Contents from "../contents/index.jsx";
import React, { Component } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import More from "../more";
import Data from "../data";
import Login from "../login";
import Header from "../header";
import Home from "../home";
import Category from "../category/Category";
import GetUnique from "../getUnique";
import Footer from "../footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data(),
    };
  }
  render() {
    let cats = [];
    cats = this.state.data.map((el) => el.type);
    cats = GetUnique(cats);
    return (
      <HashRouter>
        <div className="app">
          <div className="container">
            <Login />
            <Home />
            <Header prop={this.state.data} />
            <Routes>
              <Route
                path="/"
                exact
                element={<Contents prop={this.state.data} />}
              />
              {cats.map((el) => {
                return (
                  <Route
                    path={`/${el}`}
                    exact
                    element={<Category prop={this.state.data} />}
                  />
                );
              })}
              {this.state.data.map((el) => {
                console.log(`/${el.type}/${el.id}`);
                return (
                  <Route
                    path={`/${el.type}/${el.id}`}
                    exact
                    element={<More prop={this.state.data} />}
                  />
                );
              })}
            </Routes>
            <Footer />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
