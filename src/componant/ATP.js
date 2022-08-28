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
 city-explorr
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

     const cityNam =event.target.city.value;
     const key ='pk.8814dece528e9fd34555ea0a15dbe211';
     const url =`https://us1.locationiq.com/v1/search?key=${key}&q=${cityNam}&format=json`;
    try{
        let res=await axios.get(url);
        this.setState({
         display_name:res.data[0].display_name,
   lat:res.data[0].lat,
   lon :res.data[0].lon,
   maplag:true
   
        })


    }
    catch{

this.setState({
    errorlag:true
})


main
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
  } city-explorr


  render(){
    return(
      <div>
     <h1>location App</h1>
     <form onSubmit={this.locationdata}>
      <input type="text" name="city" placeholder="enter city"/>
      <button type="submit">submit</button>
     </form>
     <h3> display_name :{this.state.display_name}</h3>
     <p>lon:{this.state.lon}</p>
     <p>lat :{this.state.lat}</p>
     
     {this.state.errorlag && <p>error:{this.state.error}</p>}
{this.state.maplag && <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.8814dece528e9fd34555ea0a15dbe211&center=${this.state.lat},${this.state.lon}`}></img>
   } </div>
    )

  }








}

export default App;