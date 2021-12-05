import "./App.css";
import Contents from "../contents/index.jsx";
import React, { Component } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import More from "../more";
import Data from "../data";
import SpecialNewsTitle from "../specialNewsTitle";
import Header from "../header";
import Home from "../home";
import MobileMenu from "../mobileMenu";
import Category from "../category";
import GetUnique from "../getUnique";
import Footer from "../footer";
import SearchInput from "../searchInput";
import SearchIcon from "../searchIcon";
import MobileCategory from "../mobileCategory";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data(),
      showInput: false,
      searchValue: "",
      isMobile: false,
    };
  }
  deviceChange = () => {
    this.setState({ isMobile: !this.state.isMobile });
  };
  onSearchChanged = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  changeState = () => {
    this.setState({ showInput: !this.state.showInput });
  };
  render() {
    let cats = [];
    cats = this.state.data.map((el) => el.type);
    cats = GetUnique(cats);
    let filteredNews = this.state.data.filter((el) => {
      if (
        el.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
      ) {
        return el;
      }
    });
    return (
      <HashRouter>
        <div className="app">
          <div className="container">
            <div className="menuu">
              <Home />
              <div className="header-right">
                {this.state.showInput === false ? (
                  <Header
                    className="head"
                    fn={this.changeState}
                    prop={this.state.data}
                  />
                ) : (
                  <SearchInput fn={this.onSearchChanged} />
                )}
                <SearchIcon fn={this.changeState} />
                <MobileMenu fn={this.deviceChange} />
              </div>
            </div>

            <div className="real-contents">
              {this.state.isMobile === false ? null : (
                <MobileCategory prop={this.state.data} />
              )}
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <div>
                      <SpecialNewsTitle />
                      {this.state.searchValue === "" ? (
                        <Contents prop={this.state.data} />
                      ) : (
                        <Contents prop={filteredNews} />
                      )}
                    </div>
                  }
                />
                {cats.map((el) => {
                  return (
                    <Route
                      path={`/${el}`}
                      exact
                      element={
                        <Category
                          filNews={filteredNews}
                          querry={this.state.searchValue}
                          prop={this.state.data}
                        />
                      }
                    />
                  );
                })}
                {this.state.data.map((el) => {
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
        </div>
      </HashRouter>
    );
  }
}
export default App;
