import React from 'react';
import {
  Card, CardText, CardBody,Button} from 'reactstrap';

const Card2 = (props) => {
  return (
    <div style={{ width: "318px" , margin:"auto" , padding: "1.25rem"}}>
      <h3 style={{textAlign: "center"}}> Content Type</h3>
      <Card  >

        <CardBody>
          <CardText className="card2" >This is some text within a card body.</CardText>

        </CardBody>
      </Card>
      <br /> <br />
    </div>
     
  );
};

export default Card2;