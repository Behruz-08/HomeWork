export const productPosts =()=>{
    return[
      {
        content:'это контент',
        title:'это тайтл'
      }
   
    ]
  }
 export const getPosts = productPosts();
  
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
  
 export const handleSubmit = (formData) => {
    console.log('Form data submitted:', formData);
  };
  
  
 export const images = [
    {
      id: '1',
      imgUrl: ''
    },
    {
      id: '2',
      imgUrl: ''
    },
    {
      id: '3',
      imgUrl: ''
    },
    {
      id: '4',
      imgUrl: ''
    },
    {
      id: '5',
      imgUrl: ''
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
    // Дополнительная логика обновления текущего индекса
  };