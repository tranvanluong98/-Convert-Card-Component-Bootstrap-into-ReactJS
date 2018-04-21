import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
const Card1 = (props) => {
  return (
    <div>
      <br /> <br /><br />
    </div>
    <div style={{ width: "318px" }}>


      <Card>

        <CardImg height="180px" width="318px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button >Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card1;