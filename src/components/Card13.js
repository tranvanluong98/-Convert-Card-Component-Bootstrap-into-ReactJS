import React from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'reactstrap';

const Card13 = (props) => {
    return (
        <div style={{ marginLeft: "40%", marginTop: "-50%", width: "348px", padding: "1.25rem", textAlign: "center", paddingTop: "5px" }}  >
            <h3 style={{}}>Background and color</h3>

            <br />
            <Card body inverse color="primary">
                <CardHeader style={{ backgroundColor: "rgba(0,0,0,.03)" }} >Header</CardHeader>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

            </Card>
            <br />
            <Card body inverse style={{ backgroundColor: "#17a2b8" }}>
                <CardHeader style={{ backgroundColor: "#17a2b8" }}>Header</CardHeader>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

            </Card>

            <br />
            <Card body inverse style={{ backgroundColor: "#343a40" }}>
                <CardHeader style={{ backgroundColor: "#343a40" }}>Header</CardHeader>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

            </Card>
            <br />
            <Card body inverse style={{ backgroundColor: "#ffc107" }}>
                <CardHeader style={{ backgroundColor: "#ffc107" }}>Header</CardHeader>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

            </Card>
            <br />
            <Card body inverse style={{ backgroundColor: "#dc3545" }}>
                <CardHeader style={{ backgroundColor: "#dc3545" }}>Header</CardHeader>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>

            </Card>
            <br />
        </div>
    );
};

export default Card13;