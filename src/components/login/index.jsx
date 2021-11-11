import React, { Component } from "react";
import "./index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      admin1: "Prox",
      pass1: "Prox1115",
      admin2: "Nomie",
      pass2: "Nomie1011",
    };
  }
  //   changeState = () => {
  //     console.log(this);
  //     this.setState({ admin1: "Bayarjargal" });
  //   };
  //   changeState() {
  //     this.admin1 = {
  //       name: "Bayarjargal",
  //     };
  //     console.log(this.admin1.name);
  //   }
  render() {
    return <div onClick={this.changeState}>{this.state.admin1}</div>;
  }
}
export default Login;
