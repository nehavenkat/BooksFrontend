import React, { Component } from 'react';

class Book extends Component {
    state = {};
    render() {
      console.log(this.props);
  
    return (
      <div className="col-3">
      <Card>
        <CardImg top width="100%" src={this.props.book.img} alt="Card image" />
        <CardBody>
          <CardTitle>{this.props.book.title}</CardTitle>
          <CardText>{this.props.price}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </div>);
  };
  }

export default Book;