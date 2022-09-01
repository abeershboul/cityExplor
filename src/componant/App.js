import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


//import axios from 'axios;'
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state({
  //     potoArray :[]
  //   })
  // }
  getpoto=(event)=>{
    event.preventDefault();
    const searchQuery=event.target.name.value
  }
  
  render(){
    return(
<>
<h1>scerh a poto</h1>

 <Form onSubmit={this.getpoto}>
      <fieldset disabled>
        <Form.Group className="mb-3" >
          <Form.Label htmlFor="name">searh about</Form.Label>
          <Form.Control id="name" placeholder="what you seach about" />
        </Form.Group>
        
        <Button type="submit">Searh</Button>
      </fieldset>
    </Form> 



</>


    )




  }
}
export default App;