


import style from "./ProductsCard.module.css"

const ProductsCard = ({ productsInfo }) => {
  return (
    <div className={style.wraper}>
      {productsInfo.map((product) => (
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
