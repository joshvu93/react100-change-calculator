import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountRecieved: 0,
      changeTotal: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
    };
    this.changeInput = this.changeInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  changeInput(event) {
    this.setState({ [event.target.name]: [event.target.value] });
  }

  calculate() {
    var changeTotal = this.state.amountReceived - this.state.amountDue;
    var change = changeTotal;
    this.setState({ changeTotal });

    const twenties = Math.floor(change / 20.00);
    var remainder = change % 20.00;
    this.setState({ twenties: twenties });

    const tens = Math.floor(remainder.toFixed(2) / 10.00);
    var remainder = change % 10.00;
    this.setState({ tens: tens });

    const fives = Math.floor(remainder.toFixed(2) / 5.00);
    var remainder = change % 5.00;
    this.setState({ fives: fives });

    const ones = Math.floor(remainder.toFixed(2) / 1.00);
    var remainder = change % 1.00;
    this.setState({ ones: ones });

    const quarters = Math.floor(remainder.toFixed(2) / 0.25);
    var remainder = (remainder = 0.25);
    this.setState({ quarters: quarters });

    const dimes = Math.floor(remainder.toFixed(2) / 0.10);
    var remainder = change % 0.10;
    this.setState({ dimes: dimes });

    const nickels = Math.floor(remainder.toFixed(2) / 0.05);
    var remainder = change % 0.05;
    this.setState({ nickels: nickels });

    const pennies = Math.floor(remainder.toFixed(2) / 0.01);
    var remainder = change % 0.01;
    this.setState({ pennies: pennies });
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='header'>
            <h1 className='text-center'>Change Calculator</h1>
          </div>
        </div>
        <div className='body'>
          <p>Amount Due</p>
          <input type="number" name="amountDue" value={this.state.charge} onChange={this.changeInput} />        </div>
        <div className='body'>
          <p>Amount Recieved</p>
          <input type="number" name="amountReceived" value={this.state.tender} onChange={this.changeInput} />        </div>
        <div>
        <button type="button" name="btn-outline-warning" onClick={this.calculate}>submit</button>
        </div>
        <div id='output' name='output'>${this.state.changeTotal} is your change.</div>
        <div className='well'>
          <h3>Pennies</h3>
          <p className="change">{this.state.pennies}</p>
          <h3>Nickels</h3>
          <p className="change">{this.state.nickels}</p>
          <h3>Dimes</h3>
          <p className="change">{this.state.dimes}</p>
          <h3>Quarters</h3>
          <p className="change">{this.state.quarters}</p>
          <h3>Ones</h3>
          <p className="change">{this.state.ones}</p>
          <h3>Fives</h3>
          <p className="change">{this.state.fives}</p>
          <h3>Tens</h3>
          <p className="change">{this.state.tens}</p>
          <h3>Twenties</h3>
          <p className="change">{this.state.twenties}</p>
        </div>
      </div>
    );
  }
}
export default App;