import React from 'react';
import ReactDOM from 'react-dom';
import '../css/Main.css'

import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))