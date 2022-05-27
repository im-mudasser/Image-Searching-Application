import React from "react";
import "./ImageList.css";
import DisplayImage from "./DisplayImage";
/* it also fine */
// const ImageList = (props) => {
//   const images = props.images.map((image) => {
//     return (
//       // <img src={image.urls.regular} key={image.id} alt={image.description} />
//       // <DisplayImage key={image.id} sendImage={image} />
//       <DisplayImage sendImage={image} />
//     );
//   });

//   return <div className="image-list">{images}</div>;
// };
// export default ImageList;

// function ImageList(props) {
//   const images = props.images.map((image) => {
//     return (
//       <img src={image.urls.regular} key={image.id} alt={image.description} />
//     );
//   });
//   return <div>{images}</div>;
// }

class ImageList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const images = this.props.images.map((image) => {
      return <DisplayImage key={image.id} sendImage={image} />;
    });

    return (
      <div>
        <div className="image-list">{images}</div>
      </div>
    );
  }
}
export default ImageList;
