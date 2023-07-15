import React from 'react';

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0,
      images: [
        'Images/image1.jpg',
        'Images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg',
      ]
    };
  }

  handleNext = () => {
    const { images } = this.state;
    const { currentImageIndex } = this.state;
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    this.setState({ currentImageIndex: nextImageIndex });
  };

  handlePrevious = () => {
    const { images } = this.state;
    const { currentImageIndex } = this.state;
    const previousImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    this.setState({ currentImageIndex: previousImageIndex });
  };

  render() {
    const { currentImageIndex } = this.state;
    const { images } = this.state;
    // console.log(this.state.images);
  
    return (
      <div>
        <button onClick={this.handlePrevious}>Previous</button>
        <img src={images[currentImageIndex]} alt="Gallery" />
        <button onClick={this.handleNext}>Next</button>
      </div>
    );
  }  
}

export default Gallery;
