import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom'; // Fix the import statement
import ErrorBoundary from './Components/ErrorBoundary';
import App from './App';
import './style.css'; // Import the CSS file

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
);