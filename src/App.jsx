import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login"
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import { browserHistory, Router, Route } from 'react-router';
import NoMatchPage from "./NoMatchPage";




export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <NavBar/>
            <div className="container-fluid">
            <Routes>
              <Route path="/"  exact element={<Login />} />
              <Route path="/dashboard"  exact element={<Dashboard />} />
              <Route path="/customers" exact element={<CustomerList/>}/>

              <Route path="/cart" exact element={<ShoppingCart/>}/>
              <Route path="*" element={<NoMatchPage/>}/>




            </Routes>
            </div>
 </BrowserRouter>

    );
  }
}
