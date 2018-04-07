import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 0;
  state = {
    information: [
      // {
      //   id: 0,
      //   name: "김민준",
      //   number: "01012394020"
      // },
      // {
      //   id: 1,
      //   name: "김찬",
      //   number: "01013104320"
      // },
      // {
      //   id: 2,
      //   name: "김경훈",
      //   number: "01040396681"
      // }
    ]
  };
  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };

  render() {
    const { information } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        {/* Form */}
        <PhoneForm onCreate={this.handleCreate} />
        {/* Search */}
        {/* List */}
        <PhoneInfoList />
        <div>
          {JSON.stringify(information)}
          {/* {this.state.information.map((id, name) => {
            return <span>{id}</span>;
          })} */}
        </div>
      </div>
    );
  }
}

export default App;
