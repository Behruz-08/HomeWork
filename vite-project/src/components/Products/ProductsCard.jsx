
// import style from "./ProductsCard.module.css"
// const ProductsCard = ({getProducts}) => {
//   return (
//     <div className={style.wraper}>
//       {getProducts.map((getProduct)=>(
//         <div key={getProduct.id}>
//           <h3>{getProduct.id}</h3>
//           <h5>{getProduct.info}</h5>
//           <p>{getProduct.price}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ProductsCard

import style from "./ProductsCard.module.css"

const ProductsCard = ({ productInfo }) => {
  return (
    <div className={style.wraper}>
      {productInfo.map((product) => (
        <div className={style.cards} key={product.id}>
        <div className={style.card}>

          <h3>{product.id}</h3>
          <h5>{product.info}</h5>
          <p>{product.price}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default ProductsCard
