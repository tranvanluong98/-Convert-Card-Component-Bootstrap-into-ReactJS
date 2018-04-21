import React from 'react';
import { Button } from 'react-bootstrap';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
class Xuly extends React.Component {
    render() {
        return (
            <div>
                
                <Button bsStyle="success" > Click Here </Button>
                <Header />
                <Content />
                
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 className="h1">Header</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>The content text!!!</p>
            </div>
        );
    }
}


export default Xuly;
