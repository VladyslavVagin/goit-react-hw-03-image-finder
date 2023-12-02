import { Component } from "react"
import SearchBar from "./SearchBar/SearchBar"
import ImageGallery from "./ImageGallery/ImageGallery"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import getPicturesApi from "./api-request/api-request"
import Button from "./Button/Button"

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    searchData: '',
  }

  

  onSubmitForm = (event) => {
     event.preventDefault();
     const searchData = event.target.elements[1].value;
     if (searchData.trim() !== '') {
      this.setState({searchData});
      getPicturesApi(searchData, this.state.page).then(r => r.data).then(data => {
        if(data.total === 0) {
          Promise.reject(new Error('Images not founded, we so sorry'));
        }
        this.setState({images: data.hits});
      }).catch(error => console.log(error.message)).finally(() => event.target.elements[1].value = '');
     } else {
      alert('Please write your request correctly!!!')
     }
  }

  onClick= () => this.setState(({page}) => ({page: page + 1}));


  render() {
    const {images} = this.state;
    return <div>
      <SearchBar onSubmit={this.onSubmitForm} />
      <ImageGallery>
         <ImageGalleryItem images={images}/>
      </ImageGallery>
      <Button onClick={this.onClick}/>
    </div>
  } 
};
