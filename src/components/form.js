import React from 'react';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'



class Formlocation extends React.Component{
    render(){



return(
    <Form style={{margin:'6rem'}} onSubmit={this.props.forSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail"   >
      <Form.Label > location name </Form.Label>
      <Form.Control type="text" placeholder="address" onChange={this.props.forChange} />
      <Form.Text className="text-muted">
        enter the name of the city that woud like to see where its location
      </Form.Text>
    </Form.Group>



    <Button variant="primary" type="submit" style={{width:'10rem'}} >
      Explor
    </Button>
  </Form>
)




    }
}


export default Formlocation