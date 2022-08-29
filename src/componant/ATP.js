import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Ratio from 'react-bootstrap/Ratio';



class ATP extends React.Component {

  constructor(prop){
    super(prop);
    this.state={
      display_name:'',
      lat:'',
      lon:'',
      error:'',
      mapFlag:''

    }
  }

  getLocation =async (event) =>{
    event.preventDefault();
    const cityName=event.target.city.value;
    let key="pk.8814dece528e9fd34555ea0a15dbe211"
    let URL=`https://us1.locationiq.com/v1/search?key=${key}&q=${cityName}&format=json`;




   try{
    let result =await axios.get(URL);
    let data=result.data[0];
  
    this.setState({
      display_name:data.display_name,
      lat:data.lat,
      lon:data.lon,
      mapFlag:true,
      error:'' ,

    })
   }
   catch{
    this.setState({
      error:'Erorr :something went wrong! ' ,
      mapFlag:false
    })

   }

    
  
    


  }

  render() {

    return (
      <>
      <div>
      <Form onSubmit={this.getLocation } style={{ width:'500px' ,borderRadius:"15%" , borderStyle:"solid",borderWidth:'1px'}} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h2>search location</h2> </Form.Label>
        <Form.Control type="text" placeholder="search location" name="city" />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
      </div>
      <div>
        <h3> Location Name : {this.state.display_name} </h3>
        <br></br>
        <h4> Lat :{this.state.lat} </h4>
        <h4>Lon :{this.state.lon} </h4>

        {this.state.mapFlag && <div style={{ width: 660, height: 'auto' }}>
      <Ratio aspectRatio="16x9">
        <embed type="image/svg+xml" src={`https://maps.locationiq.com/v3/staticmap?key=pk.8814dece528e9fd34555ea0a15dbe211&center=${this.state.lat},${this.state.lon}`} />
      </Ratio>
    </div> }



      </div>
      </>
    );
  }
}

export default ATP;