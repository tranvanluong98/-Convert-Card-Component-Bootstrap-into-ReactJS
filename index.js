import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CSS/Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Xuly from './components/Xuly';
import App1 from './components/App1';
import Header from './components/Header';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';

ReactDOM.render(
    <div>
    {/* <Xuly />
    <App1 /> */}
    <Header />
    <Card1 />
    <Card2 />
    <Card3 />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
