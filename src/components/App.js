import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
//import '../App.css';

class App extends Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },

      /*}).then((response) => {
        console.log(response.data.results)
      });*/
    })
    this.setState({ images: response.data.results });
  }

  renderContent = () => {
    if (this.state.images.length > 0) {
      return (<div>Found: {this.state.images.length} images</div>)
    }
    if (this.state.images.length === 0) {
      return (<div>Search Images</div>)
    }
  }

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit1={this.onSearchSubmit} />
        {this.renderContent()}
        <ImageList images={this.state.images} />
      </div >
    );
  }
}

export default App;
