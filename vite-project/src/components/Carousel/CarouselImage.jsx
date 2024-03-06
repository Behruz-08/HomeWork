
import style from "./CarouselImage.module.css";

const CarouselImage = ({ images }) => {
  let currentIndex = 0;

  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  };

  const prevImage = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  };

  const updateImage = () => {
    const imageElement = document.querySelector('.image');
    imageElement.src = images[currentIndex].imgUrl;

    const indexElement = document.querySelector('.index');
    indexElement.textContent = currentIndex;
  };

 
  return (
    <div className={style.wraper}>
      <div className={style.img}>
        <img src={images[currentIndex].imgUrl} className="image" alt={`Image ${currentIndex + 1}`} />
      </div>
      <p className="index">{currentIndex}</p>
      <div className={style.buttons}>
        <button onClick={prevImage}>Prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

export default CarouselImage;


   





// import React from 'react';
// import style from "./CarouselImage.module.css";





// const CarouselImage = ({ images}) => {
 
//   // const [currentIndex, setCurrentIndex] = React.useState(0);


//   // const nextImage = () => {
//   //   setCurrentIndex((currentIndex + 1) % images.length);
//   // };

//   // const prevImage = () => {
//   //   setCurrentIndex((currentIndex - 1 + images.length) % images.length);
//   // };

//   // if (images.length === 0) {
//   //   return <div>Нет изображений для отображения</div>;
//   // }
// // console.log(currentIndex);

// let currentIndex = 0;

// const nextImage = () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateImage();
// };

// const prevImage = () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateImage();
// };

// const updateImage = () => {
//   const imageElement = document.querySelector('.image');
//   imageElement.src = images[currentIndex].imgUrl;

//   const indexElement = document.querySelector('.index');
//   indexElement.textContent = currentIndex;
// };

// if (images.length === 0) {
//   return 'Нет изображений для отображения';
// }
  

//   return (
//     <div className={style.wraper}>
   
//     <div className={style.img}>
    
//       <img src={images[currentIndex].imgUrl} alt={`Image ${currentIndex + 1}`} />
//       </div>
      
//       <p>{currentIndex}</p>
//       <div className={style.buttons}>
//       <button onClick={prevImage}>Prev</button>
//       <button onClick={nextImage}>Next</button>
//       </div>
      

//     </div>
//   );

  
// };

// export default CarouselImage;


