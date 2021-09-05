import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
constructor(props){
super(props)
this.state={
nameOflocation:''
}
}

forChange=(e)=>{
this.setState({
  nameOflocation:e.target.value
})

// console.log(e.target.value);
}


forSubmit= async (e)=>{
  e.preventDefault();

  console.log(this.state.nameOflocation);

  const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.nameOflocation}&format=json`;
  console.log(url);

  const theResponse = await axios.get(url);
console.log(theResponse.data[0]);

this.setState({
  nameOflocation:theResponse.data[0]
})
  

  
}






render(){

  return(
<main>
<Form onSubmit={this.forSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail"   >
    <Form.Label> location name </Form.Label>
    <Form.Control type="text" placeholder="address"  onChange={this.forChange} />
    <Form.Text className="text-muted">
      enter the name of the city that woud like to see where its location 
    </Form.Text>
  </Form.Group>

 
 
  <Button variant="primary" type="submit"  >
    Submit
  </Button>
</Form>


  <h2>Location Info </h2>
  <p>{this.state.nameOflocation.display_name}</p>
  <p>{this.state.nameOflocation.lat}</p>
  <p>{this.state.nameOflocation.lon}</p>






</main>

  )







}







}

export default App;
