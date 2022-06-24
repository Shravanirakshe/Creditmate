import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'






class Quiz extends React.Component {

    constructor(props) {
    super(props);
    this.state = { now : 0 };
    }
    
    render(){return (

        <div style={{"padding": "30px"}}>
         <div class="container" >
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>    

             <h1> Quiz</h1>
             <span style = {{ height : "10px" }} class="bi bi-trophy"></span>
             <ProgressBar now={this.state.now} label={`${this.state.now}%`} visuallyHidden />



        </div>   
         
         
    
        </div>
      );
   
 }}

export default Quiz;