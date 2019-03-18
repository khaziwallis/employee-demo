import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Routing from './Routing';


ReactDOM.render(
  <BrowserRouter>
  	<Route component={Routing} />
  </BrowserRouter>,
  document.getElementById("content")
);