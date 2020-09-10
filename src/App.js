import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// showing vs-code github setup
class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 1, title: "make breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handle change");
  };
  handleChange = (e) => {
    console.log("handle Submit");
  };
  clearList = () => {
    console.log(" Clear List");
  };
  handleDelete = (id) => {
    console.log(`handle edit ${id}`);
  };
  handleEdit = (id) => {
    console.log(`edit edit ${id}`);
  };
  render() {
    return (
      <div className="contanier">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize  text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.handleItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
