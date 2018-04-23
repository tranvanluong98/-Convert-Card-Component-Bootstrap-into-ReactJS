import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
const Card1 = (props) => {
  return (
    <div style = {{width: "318px", margin:"auto"}}>
        <h3 style={{textAlign:"center"}}> Card 1</h3>
      <Card >
        
        <CardImg height = "180px" width="318px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody style={{padding: "1.25rem"}}>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button style={{padding: "1.25rem", backgroundColor:"#007bff", cursor:"pointer" , color: "#ffffff",borderColor: "#007bff" }}>
          Go somewhere</Button>
        </CardBody>
      </Card>
      <br /> <br />
    </div>

  );
};

export default Card1;