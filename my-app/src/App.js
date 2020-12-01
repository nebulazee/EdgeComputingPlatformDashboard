import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/_Navbar';
import  Main  from "./Components/Main/Main"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    )
  }
}
