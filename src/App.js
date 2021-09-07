import React from 'react';
import Formlocation from './components/form';
import axios from 'axios';

// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameOflocation: '',
      // mapLocation: '',
      locationdetails: false,
      wetherDeatales:[]
    }
  }

  forChange = (e) => {
    this.setState({
      nameOflocation: e.target.value
    })

    console.log(e.target.value);
  }


  forSubmit = async (e) => {
    e.preventDefault();

    console.log(this.state.nameOflocation);

    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.nameOflocation}&format=json`;
    console.log(url);


    const serverUrl=`${process.env.REACT_APP_SERVER_URL}/weathers?&city_name=${this.state.nameOflocation}`

    const theResponse = await axios.get(url);

    const serverResponse=await axios.get(serverUrl);
    console.log(theResponse.data[0]);

    this.setState({
      nameOflocation: theResponse.data[0],
      locationdetails: true,
      wetherDeatales: serverResponse
    })

   
  }








  render() {


    const pStyle = {

      color: "black",
      margin: "20px",
      fontFamily: "Arial"

    }

    let weatherstuff=this.state.wetherDeatales.map(item=>{
      return <p>{item.date}:{item.description}</p>
    })
  

    return (
      <main>
       <Formlocation
       forSubmit={this.forSubmit}
       forChange={this.forChange}

       
       />

        {
          this.state.locationdetails &&
          <div>
    <h2 style={{color: "red"}}>Location Info </h2>
  <p  style={pStyle} > location {this.state.nameOflocation.display_name}</p>
  <p style={pStyle}>lat :{this.state.nameOflocation.lat}</p>
  <p style={pStyle}>lon :{this.state.nameOflocation.lon}</p>
  <img  style={pStyle}src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.state.nameOflocation.lat},${this.state.nameOflocation.lon}&zoom=1-18`} alt=""/>

  <p>{weatherstuff}</p>










  </div>


        }



      </main>

    )







  }







}

export default App;
