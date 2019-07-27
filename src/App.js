import React, { Component } from 'react';
import './App.css';
import Tickers from './components/Tickers.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Container">
                    <div className="App-header">
                        <h2>Cryptocurrency Ticker</h2>
                    </div>
                    <Tickers />
                </div>
            </div>
        );
    }
}

export default App;