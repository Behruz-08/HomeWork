
import './App.css'
import CarouselImage from './components/Carousel/CarouselImage'
import LoginForm from './components/Logins/LoginForm'
import PostList from './components/Post/PostList'
import ProductsCard from './components/Products/ProductsCard'

const productPosts =()=>{
  return[
    {
      content:'это контент',
      title:'это тайтл'
    }
 
  ]
}
const getPosts = productPosts();

const productsInfo =()=>{
  return[
    {
      id:1,
      info:"чёрная краска",
      price:'200c'
    },
    {
      id:2,
      info:",белая краска",
      price:'300c'
    },
    {
      id:3,
      info:"жёлтая краска",
      price:'400c'
    }
 
  ]
}

const getProducts=productsInfo()


function App() {


  

  return (
    <>
    <PostList getPosts={getPosts} />
    <ProductsCard  productInfo={getProducts}/>
    <LoginForm/>
    <CarouselImage/>
    </>
  )
}

export default App
