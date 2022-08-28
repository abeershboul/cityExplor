import React from "react";
import axios from "axios";

class Atp extends React.Component{
  constructor(props){
    super(props);
  
      this.state={
        display_name:'',
        lat:'',
        lon:'',
        error:'sorry somthing wrong',
        errorlag:false,
        maplag:false

      }
    
  }

  locationdata = async(event)=>{
    event.preventDefault();
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


    }

       


    
    
    
    
    
    
    
    
   



  }

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
export default Atp;