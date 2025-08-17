import { useState } from 'react'
import type {ProductListProps } from '../Constants/ProductConstants'

const ProductList = ({productCategory, productList}:ProductListProps) => {

  const [isVisisble, setIsVisible] = useState(false);

  return (
    <div key={productCategory} id={productCategory}>
     <span onClick={() => setIsVisible(!isVisisble)}>{productCategory}</span>
      {isVisisble && productList.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}

export default ProductList