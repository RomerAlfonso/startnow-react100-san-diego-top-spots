import React, { Component } from 'react';
import TopSpot from './topspot';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }



  render() {
    return (
      <div className='App'>
        <div className="jumbotron jumbotron-fluid m-5">
          <div className="container">
            <h1 className="display-3 font-italic">San Diego Top Spots</h1>
            <p className="lead">A list of the top 30 places to see in San Diego, California .</p>
          </div>
        </div>


        <div>
          <div className="container">
            <pre>
              {
                this.state.topspots.map(topspot => (
                  <TopSpot
                    key={topspot.id}
                    name={topspot.name}
                    description={topspot.description}
                    location={topspot.location} />
                ))
              }
            </pre>
          </div>
        </div>
      </div>



    );
  }
}

export default App;
