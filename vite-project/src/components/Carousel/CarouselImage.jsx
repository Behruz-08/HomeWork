import React from 'react';
import style from "./CarouselImage.module.css";

const CarouselImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className={style.wraper}>
    <div className={style.img}>
      <img src={images[currentIndex].imgUrl} alt={`Image ${currentIndex + 1}`} />
      </div>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      <p>{currentIndex}</p>
    </div>
  );
};

export default CarouselImage;






   



