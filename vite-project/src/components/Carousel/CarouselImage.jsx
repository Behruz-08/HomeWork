import React from 'react';
import style from "./CarouselImage.module.css";


const CarouselImage = ({ images}) => {
 
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <div>Нет изображений для отображения</div>;
  }

  return (
    <div className={style.wraper}>
   
    <div className={style.img}>
    
      <img src={images[currentIndex].imgUrl} alt={`Image ${currentIndex + 1}`} />
      </div>
      
      <p>{currentIndex}</p>
      <div className={style.buttons}>
      <button onClick={prevImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
      </div>
      

    </div>
  );
};

export default CarouselImage;






   



