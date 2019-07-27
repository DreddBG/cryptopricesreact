import React, { Component } from 'react';
import axios from 'axios';
import './Tickers.css';
import Cryptocurrency from './Cryptocurrency';

class Tickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(),60 * 1000);
    }

    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                var result = response.data;
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }

    render() {
        var tickers = this.state.data.map((currency) =>
            <Cryptocurrency data={currency} key={currency.id} />
        );
        return (
            <div className="tickers-container container">
                <ul className="tickers row justify-content-md-center">{tickers}</ul>
                <p>Information updated every minute courtesy of coinmarketcap.com</p>
           </div>
        );
    }
}

export default Tickers;