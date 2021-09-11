import React from "react"
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';







class Cardlist extends React.Component {

  render() {

    const weatherstuff = this.props.wetherDeatales.map(item => {
      return <ul>

        <li>  <strong>Date:</strong> {item.date}</li><br></br>
        {/* <strong>details:</strong>  <br></br> */}

        High:  {item.high_temp}<br></br>
        Low:{item.low_temp}<br></br>
        Description: {item.description}<br></br>



      </ul>

    })


    const movieStuff = this.props.movieDeatels.map(item => {
      return <ul> <li> <strong>title:</strong> {item.title} </li>

        <li> <strong>overview:</strong> <br></br>{item.overview}</li>

        <li>  <strong>vote rate:</strong> {item.vote}<br></br>---------------------- </li> </ul>

    })



    const styling = {
      color: "black",

      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <Card style={{ width: '25rem', margin: '6rem' }}>
        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.locationData.lat},${this.props.locationData.lon}&zoom=1-18`} />
        <Card.Body>
          <Card.Title >{this.props.locationData.display_name}</Card.Title>
          <Card.Text>
            <h5>Longitude: </h5> {this.props.locationData.lon}

          </Card.Text>
          <Card.Text>

           <h5> Latitude:</h5>  {this.props.locationData.lat}

          </Card.Text>
          <Card.Text>
            <h3>weather information </h3>
            {weatherstuff}
          </Card.Text>
          <Card.Text>
            <h3>movie  information </h3>
            {movieStuff}
          </Card.Text>

        </Card.Body>
      </Card>
    )

  }


}


export default Cardlist