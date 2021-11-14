import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index";
import AddNews from "../addNews";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      admin1: "Prox",
      pass1: "Prox1115",
      admin2: "Nomie",
      pass2: "Nomie1011",
      userName: "",
      userPass: "",
    };
  }
  changeState = () => {
    this.state.isLogin === true
      ? this.setState({ isLogin: false })
      : this.setState({ isLogin: true });
  };
  handleChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };
  handleChangePass = (event) => {
    this.setState({ userPass: event.target.value });
  };
  addNews = () => {
    if (this.state.admin1 === this.state.userName) {
      if (this.state.pass1 === this.state.userPass) {
        <AddNews />;
      } else {
        return "Wrong password";
      }
    } else {
      return "Wrong username";
    }
  };
  // changeState() {
  //   console.log(this);
  //   this.admin1 = {
  //     name: "Bayarjargal",
  //   };
  //   console.log(this.admin1.name);
  // }
  render() {
    if (this.state.isLogin === true) {
      return (
        <div className="login-cont">
          <input
            className="name"
            type="text"
            value={this.state.userName}
            onChange={this.handleChangeName}
            placeholder="Enter your admin name"
          />
          <input
            className="pass"
            type="password"
            value={this.state.userPass}
            onChange={this.handleChangePass}
            placeholder="Enter your admin password"
          />
          <Link to="/Addnews">
            <input type="button" value="Login" />
          </Link>
        </div>
      );
    } else return <div onClick={this.changeState}>Login</div>;
  }
}
export default Login;
