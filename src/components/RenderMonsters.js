import React from "react";

const RenderMonster = ({filterMonsters}) => {
  return filterMonsters.map(monster => {
    return (
        <div className="card-container" key={monster.id}>
          <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="monster" />
          <h1>{monster.name}</h1>
          <p>{monster.email}</p>
        </div>
    )
  })
}


export default RenderMonster;