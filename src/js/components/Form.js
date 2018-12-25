import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../css/Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:  '',
      url: ''
    }
  }

  handleChange = (name , event) => {
      this.setState({
        [name]: event.target.value
      })
  }

  buttonClicked = () => {
    console.log(this.state)
  }
  render() {
    return (
      <div className="entry-app-update container">
        <TextField
          id="standard-name"
          label="Name"
          className='Field-Name'
          value={this.state.name}
          onChange={event => this.handleChange('name', event)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="URL"
          className='URL-name'
          value={this.state.url}
          onChange={event => this.handleChange('url', event)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={this.buttonClicked}>
            Submit
        </Button>
      </div>
    )
  }
}
