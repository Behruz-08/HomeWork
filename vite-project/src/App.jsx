
import './App.css'
import CarouselImage from './components/Carousel/CarouselImage'
import LoginForm from './components/Logins/LoginForm'
import PostList from './components/Post/PostList'
import ProductsCard from './components/Products/ProductsCard'

import { getPosts, getProducts, handleSubmit,  images, currentIndex , setCurrentIndex } from './utils/Util'



function App() {


  return (
    <>
    <PostList getPosts={getPosts} />
    <ProductsCard  productsInfo={getProducts}/>
    <div className='card-bottom'>
    <LoginForm onSubmit={handleSubmit}/>
    <CarouselImage images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
    </>
  )
}

export default App
