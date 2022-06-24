import React from 'react';
import Button from 'react-bootstrap/Button'



class Games extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = { category_array: [  
            {  
               "name":"Credit",
               "url": "https://image.cnbcfm.com/api/v1/image/106563673-1591201514028gettyimages-1195222165.jpeg?v=1591201550&w=1600&h=900"
            },
            {  
               "name":"Loans",
               "url": "https://www.usnews.com/object/image/00000160-c6d8-dcd5-abee-ceff9a0d0000/180105-handingovermoney-stock.jpg?update-time=1515164607760&size=responsive640"
            },
            {  
                "name":"Retirement plans",
                "url":"https://www.rslcaresa.com.au/wp-content/uploads/2019/01/Journeytoretirement.jpg"
             }
            //  {  
            //     "name":"Stock",
            //     "age":37
            //  }
         ],
         now : 50
                          };
      }
      componentDidMount() {
        
        // this.setState({
        //     category_array : ["A","B","C"]
        // });
      }

      onClick = (event, category) => {
        window.open("/quiz",'_self');
        this.setState({
            now : 70
        });

      }


    render(){return (
        <div style={{"padding": "30px"}}>
         <div class="container" >
             <h1> Your Games!</h1>

        </div>   
        <div class="row">
   
      
      {
      this.state.category_array.map(category => (
        <div  class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{category.name}</h5>
            <img class="card-img-top" style = {{width : '400px', height : '200px'}} src={category.url} alt="Card image cap"></img>
            <p class="card-text">desc</p>
            <Button onClick = {(e) => this.onClick(e, category)} style = {{backgroundColor: "#982881" }} variant="success">Play</Button>{' '}
          </div>
         </div>
         </div>
   
      ))}
      
      
         
         
      </div>
      
        </div>
        
   
    )}}

export default Games;