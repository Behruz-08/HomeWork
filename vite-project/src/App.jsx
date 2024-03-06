
import './App.css'
import CarouselImage from './components/Carousel/CarouselImage'
import LoginForm from './components/Logins/LoginForm'
import PostList from './components/Post/PostList'
import ProductsCard from './components/Products/ProductsCard'

import { getPosts, getProducts, handleSubmit,  images, currentIndex, setCurrentIndex } from './utils/Util'



function App() {


  return (
    <>
    <PostList getPosts={getPosts}/>
    <ProductsCard  productsInfo={getProducts}/>
    <div className='card-bottom'>
    <LoginForm onSubmit={handleSubmit}/>
    <CarouselImage images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
    </>
  )
}

export default App


/*=================== тут логика для отоброжении каждого компонента по нажатии кнопки ==================*/
// import React, { useState } from 'react';
// import './App.css';
// import CarouselImage from './components/Carousel/CarouselImage';
// import LoginForm from './components/Logins/LoginForm';
// import PostList from './components/Post/PostList';
// import ProductsCard from './components/Products/ProductsCard';

// import { getPosts, getProducts, handleSubmit, images, currentIndex, setCurrentIndex } from './utils/Util';

// function App() {
//   const [showAllComponents, setShowAllComponents] = useState(false);
//   const [showPostList, setShowPostList] = useState(false);
//   const [showProductsCard, setShowProductsCard] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [showCarouselImage, setShowCarouselImage] = useState(false);

//   const handleButtonClick = (component) => {
//     setShowPostList(component === 'PostList');
//     setShowProductsCard(component === 'ProductsCard');
//     setShowLoginForm(component === 'LoginForm');
//     setShowCarouselImage(component === 'CarouselImage');
//     setShowAllComponents(false);
//   };

//   const handleShowAllButtonClick = () => {
//     setShowPostList(true);
//     setShowProductsCard(true);
//     setShowLoginForm(true);
//     setShowCarouselImage(true);
//     setShowAllComponents(true);
//   };

//   return (
//     <>
//       <div className="button-container">
//         <button onClick={() => handleButtonClick('PostList')}>Show PostList</button>
//         <button onClick={() => handleButtonClick('ProductsCard')}>Show ProductsCard</button>
//         <button onClick={() => handleButtonClick('LoginForm')}>Show LoginForm</button>
//         <button onClick={() => handleButtonClick('CarouselImage')}>Show CarouselImage</button>
//         <button onClick={handleShowAllButtonClick}>Show All Components</button>
//       </div>
//       <div className="card-container">
//         {(showAllComponents || showPostList) && <PostList getPosts={getPosts} />}
//         {(showAllComponents || showProductsCard) && <ProductsCard productsInfo={getProducts} />}
//         {(showAllComponents || showLoginForm) && <LoginForm onSubmit={handleSubmit} />}
//         {(showAllComponents || showCarouselImage) && <CarouselImage images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />}
//       </div>
//     </>
//   );
// }

// export default App;


