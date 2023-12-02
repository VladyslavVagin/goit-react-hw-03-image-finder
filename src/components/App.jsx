import { Component } from "react"
import SearchBar from "./SearchBar/SearchBar"
import ImageGallery from "./ImageGallery/ImageGallery"
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import getPicturesApi from "./api-request/api-request"

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
  }

  

  onSubmitForm = (event) => {
     event.preventDefault();
     const searchData = event.target.elements[1].value;
     if (searchData.trim() !== '') {
      getPicturesApi(searchData, this.state.page).then(r => r.data).then(data => {
        if(data.total === 0) {
          Promise.reject(new Error('Images not founded, we so sorry'));
        }
        this.setState({images: data.hits});
      }).catch(error => console.log(error.message));
     } else {
      alert('Please write your request correctly!!!')
     }
  }

  render() {
    const {images} = this.state;
    return <div>
      <SearchBar onSubmit={this.onSubmitForm} />
      <ImageGallery>
         <ImageGalleryItem images={images}/>
      </ImageGallery>
    </div>
  } 
};
