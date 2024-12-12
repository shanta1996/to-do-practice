import React, { useEffect, useState } from 'react'

const HowNotFetch = () => {
    const [apiData, setapiData] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    const API = "https://pokeapi.co/api/v2/pokemon/squirtle"

    const fetchData = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setapiData(data)
                setloading(false)
            })
            .catch((error) => {
                console.log(error)
                setloading(false)
                seterror(error)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log(apiData);
if(loading){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
if(error){
    return(
        <div>error:{error.message}</div>
    )
}
    return (
        
        <div>
           <p>data</p>
           <p> {apiData.name}</p>
           <img className='h-[200px] w-[200px]' src={apiData.sprites.other.dream_world.front_default} alt={apiData.name} />
           <p>{apiData.order}</p>
           <p>{apiData.species.name}</p>
           {/* <img src={apiData.sprites.other.dream_world.front_default} alt="" /> */}
        </div>
    )

}

export default HowNotFetch