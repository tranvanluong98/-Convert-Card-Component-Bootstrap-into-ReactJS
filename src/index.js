import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Header.css';
import './CSS/card2.css';
import'./CSS/card7.css';
import './CSS/button.css';
import './CSS/navigation.css';
import './CSS/card12.css';
import'./CSS/Footer.css';
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
import Card11 from './components/Card11';
import {Nav , NavItem} from 'react-bootstrap';
import Card12 from './components/Card12';
import Card13 from './components/Card13';
import Card14 from './components/Card14';
import Footer from './components/Footer';

const header = "Welcome Luong";
const cardTitle = "Card Title";
const cardSubtile ="Card subtitle";
const cardText ="Something in here"
ReactDOM.render(
    
    <div>
    
    <Header name="LuongBEAT" header={header} />
    <Card1 cardTitle={"Viết tiêu đề vào đây"}/>
    <Card2 />
    <Card3 cardTitle={"Viết tiêu đề vào đây"}/>
    <Card4 />
    <Card5 />
    <Card6 cardTitle={"Viết tiêu đề vào đây"}/>
    <Card7 />
    <Card8 />
    <Card9 />
    <Card10 /> 
    <Card11 /> 
    <Card12 />
    <Card13 />
    <Card14 />
    <Footer />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
