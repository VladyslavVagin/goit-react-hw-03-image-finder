import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import getPicturesApi from './api-request/api-request';
import Button from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    searchData: '',
  };

  onSubmitForm = event => {
    event.preventDefault();
    const searchData = event.target.elements[1].value;
    this.setState({ searchData });
    if (searchData.trim() !== '') {
      getPicturesApi(searchData, this.state.page)
        .then(r => r.data)
        .then(data => {
          if (data.total === 0) {
            Promise.reject(new Error('Images not founded, we so sorry'));
          }
          this.setState({ images: [...data.hits] });
        })
        .catch(error => console.log(error.message))
        .finally(() => (event.target.elements[1].value = ''));
    } else {
      alert('Please write your request correctly!!!');
    }
  };

  onClick = () => this.setState(({ page }) => ({ page: page + 1 }));

  componentDidUpdate(_, prevState) {
    if(prevState.searchData !== this.state.searchData) {
      this.setState({page: 1});
    }

    if (prevState.page !== this.state.page && prevState.searchData === this.state.searchData) {
      getPicturesApi(prevState.searchData, this.state.page)
        .then(response => response.data).then(data => {
          if (data.total === 0) {
            Promise.reject(new Error('Images not founded, we so sorry'));
          } else if (this.state.page !== 1) {
            this.setState((prevState) => ({images: [...prevState.images, ...data.hits]}));
          } else {
            this.setState({images: data.hits});
          }
        })
        .catch(error => console.log(error)).finally(console.log(this.state));
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSubmitForm} />
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {images.length >= 12 && <Button onClick={this.onClick} />}
      </div>
    );
  }
}
