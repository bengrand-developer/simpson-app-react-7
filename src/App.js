import React from 'react';
import Quotecard from './components/Quotecard';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: ""
    };
    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          character: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Quotecard character={this.state.character} />
        <button type="button" onClick={this.getQuotes}>Get quotes</button>
      </div>
    );
  }
}

export default App;

