import "./App.css";
import Contents from "../contents/index.jsx";
import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import More from "../more";
import Data from "../data";
import SpecialNewsTitle from "../specialNewsTitle";
import Header from "../header";
import Home from "../home";
import AddNews from "../addNews";
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
            <div className="menuu">
              <Home />
              <Header className="head" prop={this.state.data} />
            </div>
            <div className="real-contents">
              <SpecialNewsTitle />
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
                <Route path="/Addnews" element={<AddNews />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
