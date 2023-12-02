import { Component } from "react"
import SearchBar from "./SearchBar/SearchBar"
import getPicturesApi from "./api-request/api-request"



export class App extends Component {
  state = {
    searchData: '',
    isLoading: false,
    status: 'idle',

  }

  componentDidMount() {
    getPicturesApi(this.state.searchData).then(response => console.log(response));
  }

  onSubmitForm = (event) => {
     event.preventDefault();
     const searchData = event.target.elements[1].value;
      this.setState({searchData});
  }

  render() {
    return <div>
      <SearchBar onSubmit={this.onSubmitForm}/>
    </div>
  } 
};
