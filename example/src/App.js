import React, { Component } from "react";
import notification from "react-notefy";
import "react-notefy/dist/animations.css";

class App extends Component {
  handleClick = () => {
    notification.success({
      title: "Title",
      description: "Some description",
      type: "notification",
      onNotificationClose: this.handleClose,
      onNotificationClick: this.handleNotClick,
      duration: 3000
    });
  };

  handleClose = id => {
    console.log("closed", id);
  };

  handleNotClick = id => {
    console.log("close");
    notification.closeNotification(id);
  };

  render() {
    return (
      <div style={{ marginLeft: "20px" }}>
        <button onClick={this.handleClick}>open</button>
      </div>
    );
  }
}

export default App;
