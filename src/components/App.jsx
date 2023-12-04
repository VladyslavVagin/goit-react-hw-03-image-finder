import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import getPicturesApi from './api-request/api-request';
import Button from './Button/Button';
import Loader from './Loader/Loader';

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
    this.setState({ searchData, page: 1, images: [], isLoading: true });
    if (searchData.trim() !== '') {
      getPicturesApi(searchData, 1)
        .then(r => r.data)
        .then(data => {
          if (data.total === 0) {
            Promise.reject(new Error('Images not founded, we so sorry'));
          }
          this.setState({ images: data.hits });
        })
        .catch(error => console.log(error.message))
        .finally(() => {
          (event.target.elements[1].value = '');
          this.setState({isLoading: false});
        });
    } else {
      alert('Please write your request correctly!!!');
    }
  };

  onClick = () => this.setState(({ page }) => ({ page: page + 1 }));

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page &&
      prevState.searchData === this.state.searchData &&
      this.state.page !== 1
    ) {
      this.setState({isLoading: true})
      getPicturesApi(prevState.searchData, this.state.page)
        .then(response => response.data)
        .then(data =>
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }))
        )
        .catch(error => console.log(error)).finally(() => this.setState({isLoading: false}));
    }
  }

  render() {
    const { images, page, isLoading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSubmitForm} />
        <ImageGallery>
          <ImageGalleryItem images={images} />
        </ImageGallery>
        {isLoading === true &&  <Loader />}
        {images.length / 12 >= page && <Button onClick={this.onClick} />}
      </div>
    );
  }
}
