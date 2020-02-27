# react-notefy

> TODO: Component Description

[![NPM](https://img.shields.io/npm/v/react-notefy.svg)](https://www.npmjs.com/package/react-notefy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-notefy
```

## Features

- **All in one**: Spawn either a message or a notification component without having to use two separate components.
- **Stateless**: Spawn your notification component without having to worry about maintaining states.
- **customizable**: Customize components to fit your needs.

## Usage

```jsx
import React, { Component } from "react";
import notification from "react-notefy";

class App extends Component {

  handleClick = () => {
      // subType defines the type of notification component to be rendered; allowed values: "openNotification", "info", "error", "warn", "success"
    notification[subType]({
      title: // Title of the notification (ignore if component is message),
      description: // description of the notification,
      type: // determines if the type of component that is going to be rendered; allowed values: "notification", "message",
      position: // determines the position of the component; allowed values: "topLeft", "bottomLeft", "topRight", "bottomRight"; default value: "topLeft",
      onNotificationClose: // Callback on closing the component,
      onNotificationClick: // Callback on clicking the component,
      className: // String that determines user defined className for the component
      width: // Number that determines the width of the component,
      notificationId: // Id of the notification component in question.
      containerId: // The id of the component over which the notification component needs to be mounted
      closeIcon: // Path to the icon assigned to close button.
    });
  };

  handleClose = () => {
    console.log("closed");
  };

  handleNotClick = id => {
    console.log(id);
  };

  render() {
    return <button onClick={this.handleClick}>open</button>
  }
}

export default App;
```

## Basic example

```jsx
import React, { Component } from "react";
import notification from "react-notefy";

class App extends Component {
  handleClick = () => {
    notification.openNotification({
      title: "Title",
      description: "Some description",
      type: "notification",
      position: "topRight",
      onNotificationClose: this.handleClose,
      onNotificationClick: this.handleNotClick
    });
  };

  handleClose = () => {
    console.log("closed");
  };

  handleNotClick = id => {
    console.log(id);
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
```

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)
