import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return <div id="main" />;
  }
}

const appTag = document.getElementById('app');
ReactDOM.render(Main, appTag);
