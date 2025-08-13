import { useEffect, useState } from "react"
import { getProductPath, ProductType, type ProductIndex} from "../Constants/ProductConstants"

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
      <p>{product[0]}</p>
    ))}
    </div>
  )
}

export default Home