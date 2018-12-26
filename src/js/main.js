import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Main.css'

import Form from './components/Form';
import TitleBar from './components/TitleBar';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <TitleBar />
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))