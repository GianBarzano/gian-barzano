import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import 'styles/normalize.scss';
import 'styles/index.scss';
import reportWebVitals from './reportWebVitals';
import Resume from './pages/Resume';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
