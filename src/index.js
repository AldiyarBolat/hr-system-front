import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePage from './components/App';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter,
	Route,
	Switch
} from "react-router-dom";

// BrouserRouter from "react-router-dom/BrouserRouter";

ReactDOM.render(
  <BrouserRouter>
  	<App/>
  </BrouserRouter>,
  document.getElementById('root')
);
