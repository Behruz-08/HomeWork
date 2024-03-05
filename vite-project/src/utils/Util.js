export const productPosts =()=>{
    return[
      {
        content:'это контент',
        title:'это тайтл'
      }
   
    ]
  }
 export const getPosts = productPosts();

 /*=======================================PostList====================================================================*/ 
  


 export const productsInfo =()=>{
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
  
  export const getProducts=productsInfo()

   /*=======================================Productsard====================================================================*/ 




  export const handleSubmit = (formData) => {
    console.log('Form data submitted:', formData);
  };
  

  
   /*=======================================Carousel====================================================================*/ 
 
  

   
 export const images = [
    {
      id: '1',
      imgUrl: '../../src/assets/html.webp'
    },
    {
      id: '2',
      imgUrl: '../../src/assets/js.webp'
    },
    {
      id: '3',
      imgUrl: '../../src/assets/react.svg'
    },
    {
      id: '4',
      imgUrl: '../../src/assets/redux.png'
    },
    {
      id: '5',
      imgUrl: '../../src/assets/css.svg'
    }
  ];
  
  export let currentIndex = 0;
  
  export const setCurrentIndex = (newIndex) => {
    if (newIndex < 0) {
      currentIndex = 0;
    } else if (newIndex >= images.length) {
      currentIndex = images.length - 1;
    } else {
      currentIndex = newIndex;
    }
  
    console.log('Setting current index to:', currentIndex);
 
  };