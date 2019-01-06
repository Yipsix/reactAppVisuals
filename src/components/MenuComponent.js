import React, { Component } from 'react';
import Detail from './DishdetailComponent';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class Menu extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null
      }
  }

  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }

  renderComments(selectedDish){
    if(selectedDish !== null){
      const comments = selectedDish.comments;
      return(
        comments.map((comment) => {
          return(
            <li>
            {comment.comment} <br/>
            -- {comment.author}, {comment.date}
            <br/>
            <br/>
            </li>
            
          )
        }
      ))
    } else {
      return(<div/>)
    } 
    

  }


  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  render() {
      const menu = this.props.dishes.map((dish) => {
          return (
            <div  className="col-12 col-md-5 m-1">
              <Card key={dish.id}
                onClick={() => this.onDishSelect(dish)}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
              </Card>
            </div>
          );
      });

      return (
          <div className="container">
              <div className="row">
                  {menu}
                  <Detail dish={this.state.selectedDish} />
                  <ul className="list-unstyled col-12 col-md-5 m-1">
                      <h4>Comments</h4>
                      {this.renderComments(this.state.selectedDish)}
                  </ul>
              </div>
          </div>
      );
  }
}

export default Menu;