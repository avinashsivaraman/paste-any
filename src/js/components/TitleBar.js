import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'

import './../../css/title.css';


export default class TitleBar extends React.PureComponent {
  state = {
    showInputBox: false,
    inputValue: ''
  }
  render() {
    return <div>
      <Navbar inverse  collapseOnSelect className='titlebar'>
        <h4>Paste Any</h4>
        <FormControl className='titlebar-search pull-right'  type="text" placeholder="Search" />
      </Navbar>
    </div>;
  }
}
