import type {ProductListProps } from '../Constants/ProductConstants'

const ProductList = ({productCategory, productList}:ProductListProps) => {
  return (
    <div key={productCategory} id={productCategory} style={{display: 'none'}}>
      {productList.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}

export default ProductList