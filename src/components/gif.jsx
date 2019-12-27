import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props)

    this.state = {
      clicked:false
    }
  }

  handleClick = (event) => {
    this.props.selectGif(event.target.id);
  }
  render() {
    const img = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={img} alt="" id={this.props.id} className={this.state.clicked ? "clicked gif" : "gif"}
         onClick={this.handleClick}/>
    );
  }
}

export default Gif;
