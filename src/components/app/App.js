import "./App.css";
import Contents from "../contents/index.jsx";
import React, { Component } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import More from "../more";
import Data from "../data";
import Header from "../header";
import Home from "../home";
import Category from "../category/Category";
import Footer from "../footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data(),
    };
  }
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Home />
          <Header prop={this.state.data} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Contents prop={this.state.data} />}
            />
            <Route
              path="/Finance"
              exact
              element={<Category prop={this.state.data} />}
            />
            <Route
              path="/Top"
              exact
              element={<Category prop={this.state.data} />}
            />
            <Route
              path="/Sport"
              exact
              element={<Category prop={this.state.data} />}
            />
            <Route
              path="/Art"
              exact
              element={<Category prop={this.state.data} />}
            />
            <Route
              path="/Finance/1"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Finance/2"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Finance/3"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Top/1"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Top/2"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Top/3"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Sport/1"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Sport/2"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Sport/3"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Art/1"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Art/2"
              exact
              element={<More prop={this.state.data} />}
            />
            <Route
              path="/Art/3"
              exact
              element={<More prop={this.state.data} />}
            />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
