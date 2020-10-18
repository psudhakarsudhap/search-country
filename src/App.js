import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    }
  }
  componentDidMount() {
    axios.get(`http://168.235.109.53:5000/countries`)
      .then(res => {
        const countries = res.data.countries;
        this.setState({ countries });
      })
  }
  render() {
    const { countries } = this.state;
    return (
      <div className="App">
        {console.log(countries)}
        <ol>
          {countries.map(country => (
            <li key={country}>{country}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
