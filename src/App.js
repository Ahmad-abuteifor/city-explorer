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
      locationData: {},
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







    await axios.get(url).then(locationIqResponse => {

      const locationIqData = locationIqResponse.data[0];

      this.setState({
        locationData: locationIqData
      });

      const serverUrl = `${process.env.REACT_APP_SERVER_URL}/weathers?lat=${locationIqData.lat}&lon=${locationIqData.lon}`;
console.log(serverUrl);
      axios.get(serverUrl).then(weatherResponse => {

        this.setState({
          wetherDeatales: weatherResponse.data,
          locationdetails: true

        });

      });



      const movieUrl = `${process.env.REACT_APP_SERVER_URL}/movies?query=${this.state.nameOflocation}`
      axios.get(movieUrl).then(movieResponse => {

        this.setState({
          movieDeatels: movieResponse.data,
          locationdetails: true

        });

      });



    });








   


  }

  render() {
   
    console.log(this.state.wetherDeatales);
    console.log(this.state.movieDeatels);




    return (
      
      <main  >
        <Formlocation
          forSubmit={this.forSubmit}
          forChange={this.forChange}


        />


        {this.state.locationdetails &&

          <Cardlist
          locationData={this.state.locationData}
            wetherDeatales={this.state.wetherDeatales}
            movieDeatels={this.state.movieDeatels}
          />
        }



      </main>
    )







  }







}

export default App;
