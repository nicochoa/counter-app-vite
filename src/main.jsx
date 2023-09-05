import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';

import './style.css';


ReactDOM.createRoot( document.getElementById('root')).render(
    <StrictMode>
        <FirstApp />
    </StrictMode>
);