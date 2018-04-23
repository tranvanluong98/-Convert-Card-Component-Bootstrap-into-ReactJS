import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Card9 = (props) => {
    return (
        <div>
            <br/><br />
            <h3 style={{textAlign:"center"}}>Sizing</h3>
       
        <Row style={{ width: "815px", width: " 815px ", marginLeft: "19%" }}>
            <Col sm="6">
                <Card body style={{ padding: "1.25rem" }}>

                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}>Go somewhere
                        
                    </Button>
                </Card>
            </Col>
            <Col sm="6">
                <Card body style={{ padding: "1.25rem" }}>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}>Go somewhere</Button>
                </Card>
            </Col>
        </Row>
        </div>
  );
};

export default Card9;