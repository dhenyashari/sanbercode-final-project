import React from "react";

const scaleNames = {
  IDR: 'ID Rupiah',
  USD: 'US Dollar'
};

function toRupiah(dollar) {
  return (dollar*14472.80);
}

function toDollar(Rupiah) {
  return (Rupiah / 14472.80);
}

function tryConvert(currency, convert) {
  const input = parseFloat(currency);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  // const rounded = Math.round(output * 1000) / 1000;
  // return rounded.toString();
  return output.toString();
}

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCurrencyChange(e.target.value);
  }

  render() {
    const currency = this.props.currency;
    const scale = this.props.scale;
    return (
      <div className='featured-rooms'>
        <fieldset>
          <legend>Enter currency in {scaleNames[scale]}:</legend>
          <input value={currency}
                onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}

class CurrencyCalc extends React.Component {
  constructor(props) {
    super(props);
    this.handleRupiahChange = this.handleRupiahChange.bind(this);
    this.handleDollarChange = this.handleDollarChange.bind(this);
    this.state = {currency: '', scale: 'IDR'};
  }

  handleRupiahChange(currency) {
    this.setState({scale: 'IDR', currency});
  }

  handleDollarChange(currency) {
    this.setState({scale: 'USD', currency});
  }

  render() {
    const scale = this.state.scale;
    const currency = this.state.currency;
    const rupiah = scale === 'USD' ? tryConvert(currency, toRupiah) : currency;
    const dollar = scale === 'IDR' ? tryConvert(currency, toDollar) : currency;

    return (
      <div>
        <CurrencyInput
          scale="IDR"
          currency={rupiah}
          onCurrencyChange={this.handleRupiahChange} />
        <CurrencyInput
          scale="USD"
          currency={dollar}
          onCurrencyChange={this.handleDollarChange} />
        {/* <BoilingVerdict
          celsius={parseFloat(celsius)} /> */}
      </div>
    );
  }
}

export default CurrencyCalc;
