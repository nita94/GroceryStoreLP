import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Newly added import
import configureStore from './store'; // Newly added import
import './index.css';
import App from './App';

const store = configureStore(); // Newly added line

function Root() {
  return (
    <Provider store={store}> {/* Wrapping BrowserRouter with Provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// Exposing store during development
if (process.env.NODE_ENV !== "production") {
  window.store = store;
}
