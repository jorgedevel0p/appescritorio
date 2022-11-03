import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RestaurantState from './context/restaurantState'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RestaurantState>
      <App />
    </RestaurantState>
  </React.StrictMode>
);
