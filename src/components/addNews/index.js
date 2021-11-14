import React from "react";
import { Link } from "react-router-dom";
import Data from "../data";
import "./style.css";
class AddNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      img: "",
      type: "",
      more: "",
    };
  }
  changeID = (event) => {
    this.setState({ id: event.target.value });
  };
  changetTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  changeType = (event) => {
    this.setState({ type: event.target.value });
  };
  changeMore = (event) => {
    this.setState({ more: event.target.value });
  };
  changeImg = (event) => {
    this.setState({ img: event.target.value });
  };
  addnews = () => {
    let news = {
      id: this.state.id,
      name: this.state.title,
      img: this.state.img,
      type: this.state.type,
      more: this.state.more,
    };
    <Data prop={news} />;
  };
  render() {
    return (
      <div className="add-news">
        <input
          type="number"
          value={this.state.id}
          onChange={this.changeID}
          placeholder="Id"
        />
        <input
          type="text"
          value={this.state.title}
          onChange={this.changetTitle}
          placeholder="Title"
        />
        <input
          type="text"
          value={this.state.img}
          onChange={this.changeImg}
          placeholder="image-url"
        />
        <input
          type="text"
          value={this.state.type}
          onChange={this.changeType}
          placeholder="Type"
        />
        <input
          type="text"
          value={this.state.more}
          onChange={this.changeMore}
          placeholder="More"
        />
        <Link to="/Add">
          <input type="button" value="Add" />
        </Link>
      </div>
    );
  }
}
export default AddNews;
