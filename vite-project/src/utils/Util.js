export const productPosts =()=>{
    return[
      {
        id:'1',
        content:'это контент',
        title:'это тайтл',
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor facilisis neque, vitae molestie justo ultricies sit amet. Duis vel hendrerit nisi"
      }
   
    ]
  }
 export const getPosts = productPosts();

 /*=======================================PostList====================================================================*/ 
  


 export const productsInfo =()=>{
    return[
      {
        id:1,
        info:"Зелённая краска",
        price:'200c',
        imgUrl:"../../src/assets/Green_paint.webp"
      },
      {
        id:2,
        info:"Белая краска",
        price:'300c',
        imgUrl:"../../src/assets/Paint_white.png"

      },
      {
        id:3,
        info:"Жёлтая краска",
        price:'400c',
        imgUrl:"../../src/assets/paint_yellow.png"

      }
   
    ]
  }
  
  export const getProducts=productsInfo()

   /*=======================================Productsard====================================================================*/ 




  export const handleSubmit = (formData) => {
    console.log('Отправленные данные:', formData);
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
    },
    {
      id: '6',
      imgUrl: '../../src/assets/asd.svg'
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
 
  };

 