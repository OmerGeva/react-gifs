import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  selectGif = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  searchFunction = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {

    return (
      <div>
        <div className="left-scene">
          <Search searchFunction = {this.searchFunction} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
