import { useEffect, useState } from "react"
import { getProductPath, ProductType, type ProductIndex} from "../Constants/ProductConstants"
import ProductList from "./ProductList";

const Home = () => {

  const [products, setProducts] = useState<[typeof ProductType[number], ProductIndex[]][]>([]);

  useEffect(() => {
    const loadData = async() => {
      const products = await Promise.all(
        ProductType.map(async(type): Promise<[typeof type, ProductIndex[]]> => {
          const response = await fetch(getProductPath(type));
          const data: ProductIndex[] = await response.json();
          return [type, data];
        })
      )
      setProducts(products as [typeof ProductType[number], ProductIndex[]][]);
    }
    loadData();
  },[])

  return (
    <div>
      {products.map((product: [typeof ProductType[number], ProductIndex[]]) => (
        <div>
          <div key={product[0]}>
            <ProductList productCategory={product[0]} productList={product[1]}/>
          </div>
        </div>
    ))}
    </div>
  )
}

export default Home