


import style from "./ProductsCard.module.css"

const ProductsCard = ({ productsInfo }) => {
  return (
    <div className={style.wraper}>
      {productsInfo.map((product) => (
        <div className={style.cards} key={product.id}>
        <div className={style.card}>
          <h3>{product.id}</h3>
          <img  src={product.imgUrl} alt={product.info} style={{width:"150px", heigth:"150px"}}  />
          <h5>{product.info}</h5>
          <p>{product.price}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default ProductsCard
