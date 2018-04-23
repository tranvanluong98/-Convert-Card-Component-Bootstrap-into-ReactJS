import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Header.css';
import './CSS/card2.css';
import'./CSS/card7.css';
import './CSS/button.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Xuly from './components/Xuly';
import App1 from './components/App1';
import Header from './components/Header';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import Card4 from './components/Card4';
import Card5 from './components/Card5';
import Card6 from './components/Card6';
import Card7 from './components/Card7';
import Card8 from './components/Card8';
import Card9 from './components/Card9';
import Card10 from './components/Card10';
import {Nav , NavItem} from 'react-bootstrap';
function handleSelect(selectedKey) {
    alert(`selected ${selectedKey}`);
  }
  
  const navInstance = (
    <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
      <NavItem eventKey={1} href="/home">
        NavItem 1 content
      </NavItem>
      <NavItem eventKey={2} title="Item">
        NavItem 2 content
      </NavItem>
      <NavItem eventKey={3} disabled>
        NavItem 3 content
      </NavItem>
    </Nav>
  );
  render(navInstance);
  
ReactDOM.render(
    <div>
    
    <Header />
    <Card1 />
    <Card2 />
    <Card3 />
    <Card4 />
    <Card5 />
    <Card6 />
    <Card7 />
    <Card8 />
    <Card9 />
    <Card10 />  
    </div>
    , document.getElementById('root'));
registerServiceWorker();
