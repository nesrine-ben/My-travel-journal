import React from "react";
import Cadre from "./components/Cadre";
import Haut from "./components/Haut";
import Data from "./Data";

export default function App () {
  const cadres=Data.map (item => {
    return (
      <Cadre 
            key= {item.id}
            {...item}
        />
    )
  }
    )
  return (
    <div >
      <Haut />
      <section className="cadres-list">
          {cadres}
      </section>
    </div>
  )
}



        
  