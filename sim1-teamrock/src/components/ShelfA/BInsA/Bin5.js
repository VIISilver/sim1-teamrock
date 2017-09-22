import React, { Component } from 'react';
import {Link} from 'react-router-dom';



class Bin5 extends Component{
  constructor() {
    super();
    this.state = {
      name: "name",
      price: 0
    }

    this.ChangeInputName = this.ChangeInputName.bind(this);
    this.ChangeInputPrice = this.ChangeInputPrice.bind(this);
  }


  ChangeInputName(value){
    return this.setState({name:value})
  }

  ChangeInputPrice(value){
    return this.setState({price:value})
  }


    render() {
      return (
        <div>
          <h1>Bin5</h1>
          <div>
          <input onChange = {(e)=>{this.ChangeInputName(e.target.value)}}/>
          <input onChange = {(e)=>{this.ChangeInputPrice(e.target.value)}}/>
          </div>
          <div>
          <button>Save</button>
          <button>Delete</button>
          </div>
        </div>
      );
    }
  }


export default Bin5;