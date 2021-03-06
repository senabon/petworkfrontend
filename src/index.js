import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//--- import Router component ---//
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthPro } from './components/SignInAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

//--- Router wrap ---//
<Router>
  <AuthPro>
    <App />
  </AuthPro> 
</Router>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
