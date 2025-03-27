const { useState, useEffect } = require("react");

function Api(){
    const [a,abc]=useState([])
    useEffect(()=>{apis()},[])
    async function apis(){
        const data = await fetch("https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood")
        const value = await data.json()
        console.log(value)
        abc(value);
    }
    return(
        <>
        </>
    )
}
export default Api;