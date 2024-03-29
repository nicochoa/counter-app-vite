import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

import './style.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <StrictMode>
        {/* <CounterApp value={ 4 } /> */}
        <FirstApp />
    </StrictMode>
);