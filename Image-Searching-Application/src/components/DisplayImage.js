import React from "react";

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log("componet did mount called");
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    console.log("set span");
    console.log("clientHeight", this.imageRef.current.clientHeight);
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    console.log("spans is ", this.state.spans);
    console.log("displayImage is called");
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.imageRef}
          src={this.props.sendImage.urls.regular}
          //  key={this.props.sendImage.id}
          alt={this.props.sendImage.description}
        />
      </div>
    );
  }
}
export default DisplayImage;
