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
    <>
      <div id="latheDiv">
      {latheMachines.map(lathe => (
        <div key={lathe.id}>
          <p>{lathe.name}</p>
          <p>{lathe.category}</p>
          <p>{lathe.brand}</p>
          <p>{lathe.model}</p>
          <p>{lathe.description}</p>
        </div>
      ))}
      </div>
    </>
  )
}

export default Home