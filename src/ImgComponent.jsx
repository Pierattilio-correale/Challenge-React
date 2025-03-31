import { Component } from "react";

class ImgComponent extends Component {
  render() {
    return <img src={this.props.textsrc} alt={this.props.textalt} />;
  }
}

export default ImgComponent;
