import React from 'react';
import Card from 'react-bootstrap/Card';
// import image1 from "./../Image/Java.png"


const CardComponent = (props) => {

  console.log(props.Image)
  return (
    <Card style={{ width: '18rem' }} className="cardComponent">
      {/* <Card.Img variant="top" src={props.Image} /> */}
      {/* <Card.Img variant="top" src={props.Image}/> */}
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CardComponent