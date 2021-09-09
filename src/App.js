import React from 'react';
import Formlocation from './components/form';
import Cardlist from './components/card';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nameOflocation: '',
      locationData:{},
      locationdetails: false,
      wetherDeatales: [],
      movieDeatels: []
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


    // const serverUrl = `${process.env.REACT_APP_SERVER_URL}/weathers?&city=${this.state.nameOflocation}`
        


    const theResponse = await axios.get(url);
console.log(theResponse);


this.setState({
  locationData: theResponse.data[0],})

  console.log(this.state.locationData);

  const serverUrl = `${process.env.REACT_APP_SERVER_URL}/weathers?lat=${this.state.locationData.lat}&lon=${this.state.locationData.lon}`;

  const movieUrl = `${process.env.REACT_APP_SERVER_URL}/movies?query=${this.state.nameOflocation}`

    const serverResponse = await axios.get(serverUrl);

    console.log(serverResponse.data);
    const movieResponse = await axios.get(movieUrl);


    
    this.setState({
      // locationData: theResponse.data[0],
      wetherDeatales: serverResponse.data,
      movieDeatels: movieResponse.data,
      locationdetails: true,

    })




    
// await axios.get(url).then(locationIqResponse => {

//       const locationIqData = locationIqResponse.data[0];

//       this.setState({
//         locationData: locationIqData
//       });

//       const serverUrl = `${process.env.REACT_APP_SERVER_URL}/weathers?lat=${locationIqData.lat}&lon=${locationIqData.lon}`;

//       axios.get(serverUrl).then(weatherResponse => {

//         this.setState({
//           wetherDeatales: weatherResponse.data,
//           locationdetails: true

//         });

//       });

//     });


  }

  render() {
    const pStyle = {
      color: "black",
      margin: "20px",
      fontFamily: "Arial"

    }
    console.log(this.state.wetherDeatales);

    


    return (
      <main>
        <Formlocation
          forSubmit={this.forSubmit}
          forChange={this.forChange}


        />


        {this.state.locationdetails &&

          <Cardlist
            nameOflocation={this.state.nameOflocation}
            wetherDeatales={this.state.wetherDeatales}
            movieDeatels={this.state.movieDeatels}
          />
        }



      </main>

    )







  }







}

export default App;
