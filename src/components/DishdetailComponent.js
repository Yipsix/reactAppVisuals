import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail  extends Component {
    constructor(props) {
        super(props);
    }



    renderDetail(){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card key={this.props.dish.id}>
                    <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                    <div>
                        <h4>{this.props.dish.name}</h4>
                    </div>
                        <p>{this.props.dish.description}</p>
                    </Card>
                  </div>
                )        
    }



    render(){
        if(this.props.dish !== null){
            return(this.renderDetail())
        }else {
            return(<div/>)
        }

      
      
  }
}


export default DishDetail ;