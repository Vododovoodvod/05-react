import "the-new-css-reset/css/reset.css"
import "./styles/index.css"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from "./contexts/AppContext";
import { idHelpers } from './library/helpers';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider value={{id: idHelpers.generateID()}}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
