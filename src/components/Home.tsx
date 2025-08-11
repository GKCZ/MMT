import { useEffect, useState } from "react"
import type { ProductIndex } from "../Constants/ProductConstants"

const Home = () => {

  const [latheMachines, setLatheMachines] = useState<ProductIndex[]>([]);

  useEffect(() => {
    const fetchLatheMachineData = async() => {
      const response = await fetch("/Files/latheMachines.json");
      const data = await response.json();
      setLatheMachines(data);
    }
    fetchLatheMachineData();
  },[])

  return (
    <div>Home</div>
  )
}

export default Home