import React from 'react';
import { Nav, NavItem, NavLink, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default class Example extends React.Component {

    render() {
        return (
            <div style={{ width: "836px", height: "264px" }}>
                <h3 style={{ textAlign: "center", position: "relative", textAlign: "center", top: "212%", left: "32%" }}> Navigation </h3>
                <br /> <br />
                <Nav tabs className="header-card-7 card-navigation-11" style={{ height: "61px", paddingLeft: "15px" }}>

                    <NavItem>
                        <NavLink href="#" active>Active</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="#">Link</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink disabled href="#">Disabled</NavLink>
                    </NavItem>


                </Nav>
                <CardBody className="card-navigation-11" style={{ textAlign: "center" }}>
                    <CardTitle >Special title treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button style={{ padding: "1.25rem", backgroundColor: "#007bff", cursor: "pointer", color: "#ffffff", borderColor: "#007bff" }}>Go somewhere</Button>
                </CardBody>
            </div>
        );
    }
}