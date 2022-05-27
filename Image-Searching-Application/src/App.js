import React from "react";
//import unsplash from "./api/unsplash";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSerachSubmit = async (term) => {
    console.log("Term value is ", term);
    //https://api.unsplash.com/search/photos?query?=term
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID XBTp5nH3N3BC7mehoiJcHFuP7Oy1CCt_ittF_pCm8f0",
      },
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSerachSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
