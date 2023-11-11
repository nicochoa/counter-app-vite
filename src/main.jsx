import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './style.css';
import { CounterApp } from './CounterApp';


ReactDOM.createRoot( document.getElementById('root')).render(
    <StrictMode>
        <CounterApp value={ 4 } />
    </StrictMode>
);