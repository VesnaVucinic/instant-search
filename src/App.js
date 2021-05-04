import React, { Component } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import { Hits } from 'react-instantsearch-dom';


class App extends Component {
  render() {
    return (
  <InstantSearch
    appId="latency"
    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
    indexName="bestbuy"
  >
    <main>
        <Content/>
    </main>
  </InstantSearch>
    );
  }
}

export default App;
