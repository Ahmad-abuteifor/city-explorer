import React from "react"
import Card from 'react-bootstrap/Card'






class Cardlist extends React.Component{

render(){

    const weatherstuff = this.props.wetherDeatales.map(item => {
        return <p>{item.date}:{item.description}</p>
      })


      const movieStuff = this.props.movieDeatels.map(item => {
        return <p> titele: {item.title} <br></br>

          overview: <br></br>{item.overview}<br></br>

          vote rate: {item.vote}</p>

    })

return(
<Card style={{ width: '18rem' },{margin:'18rem'}}>
  <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&center=${this.props.nameOflocation.lat},${this.props.nameOflocation.lon}&zoom=1-18`} />
  <Card.Body>
    <Card.Title style={{backgroundColor:'red'}}>{this.props.nameOflocation.display_name}</Card.Title>
    <Card.Text>
    lon :{this.props.nameOflocation.lon}

    </Card.Text>
    <Card.Text>
    lat :{this.props.nameOflocation.lat}

    </Card.Text>
    <Card.Text>
        {weatherstuff}
    </Card.Text>
    <Card.Text>
    {movieStuff}
    </Card.Text>
   
  </Card.Body>
</Card>
)

}


}


export default Cardlist 