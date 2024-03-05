
import './App.css'
import CarouselImage from './components/Carousel/CarouselImage'
import LoginForm from './components/Logins/LoginForm'
import PostList from './components/Post/PostList'
import ProductsCard from './components/Products/ProductsCard'

import { getPosts, getProducts, handleSubmit, setCurrentIndex, images, currentIndex } from './utils/Util'

function App() {


  return (
    <>
    <PostList getPosts={getPosts} />
    <ProductsCard  productsInfo={getProducts}/>
    <LoginForm onSubmit={handleSubmit}/>
    <CarouselImage images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </>
  )
}

export default App
