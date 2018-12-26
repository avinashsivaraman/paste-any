import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import Row from 'react-bootstrap/lib/Row';
import '../../css/Form.css';

export default class CustomForm extends Component {
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

  buttonClicked = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log(this.state)
  }
  render() {
    return (
      <Row className="entry-app-update container">
        <Form onSubmit={this.buttonClicked}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={event => this.handleChange('name', event)} value={this.state.name} placeholder="Enter a Name for the URL" />
          </Form.Group>

          <Form.Group controlId="formBasicURL">
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" onChange={event => this.handleChange('url', event)} value={this.state.url} placeholder="Enter the URL" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </Row>
    )
  }
}
