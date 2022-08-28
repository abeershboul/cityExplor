import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dname: "",
      lat: "",
      lon: "",
      errorMsg: false,
      mapImg: false,
      zoom: 18,
    };
  }

  getLocationData = async (event) => {
    event.preventDefault();
    const cityName = event.target.city.value;
    const key = "pk.8814dece528e9fd34555ea0a15dbe211";
    const URL = `https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`;

    try {
      let resResult = await axios.get(URL);
      this.setState({
        dname: resResult.data[0].display_name,
        lat: resResult.data[0].lat,
        lon: resResult.data[0].lon,
        mapImg: true,
        errorMsg: false,
      });
    } catch {
      console.log("err");
      this.setState({
        errorMsg: true,
      });
    }
  };
  
  
  render() {
    return (
      <div>
        
        

        <form onSubmit={this.getLocationData}>
          <input type="text" name="city" placeholder="Enter a city" />
          <button type="submit">submit</button>
        </form>
       

      
        <Card style={{ width: "40rem" }}>
          {this.state.mapImg && (
            <Card.Img
              variant="top"
              src={`https://maps.locationiq.com/v3/staticmap?key=pk.8814dece528e9fd34555ea0a15dbe211&center=${this.state.lat},${this.state.lon}&zoom=${this.state.zoom}`}
            />
          )}
          <Card.Body>
            <Card.Title>Name {this.state.dname}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Latitude: {this.state.lat}</ListGroup.Item>
            <ListGroup.Item>Longitude: {this.state.lon}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
           
            {this.state.errorMsg && (
              <h4>Error : sorry something went wrong!</h4>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;