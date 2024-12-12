import React, { useEffect, useState } from 'react'

const FetchingData = () => {
    const [apidata, setapidata] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(null)

    // const fetchdata=()=>{
    //     fetch('https://pokeapi.co/api/v2/pokemon/caterpie')
    //     .then(res=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setapidata(data)
    //         setloading(false)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //         setloading(false)
    //         seterror(error)

    //     })
    // }

    const fetchdata=async()=>{
        try{
            const res=await fetch('https://pokeapi.co/api/v2/pokemon/caterpie')
            const data=await res.json()
            setapidata(data)
            setloading(false)
        }
        catch(error){
            console.log(error)
            seterror(error)
            setloading(false)
        }
    }

    useEffect(()=>{
        fetchdata()
    },[])
    if(loading){
        return(
            <div>loading...</div>
        )
    }
    if(error){
        return(
            <div>{error.message}</div>
        )
    }
  return (
    <>
        <div>{apidata.name}</div>
        <img className='h-[200px] w-[200px]' src={apidata.sprites.other.dream_world.front_default} alt={apidata.name} />

    </>
  )
}

export default FetchingData