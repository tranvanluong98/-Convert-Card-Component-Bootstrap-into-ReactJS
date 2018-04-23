import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Card10 = (props) => {
    return (
        <div style={{ width: "318px ", height: "180px", marginLeft: "38%" }}>
            <br />
            <h3 style={{ marginLeft: "30%" }}> Text Alignment </h3>
            <br /><br />
            <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}>Go somewhere</Button>
            </Card>
            <Card body className="text-center">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}>Go somewhere</Button>
            </Card>
            <Card body className="text-right">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}>Go somewhere</Button>
            </Card>
        </div>
    );
};

export default Card10;