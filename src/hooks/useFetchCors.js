//Developer Only
import { useEffect, useState } from 'react'

export const useFetchCors = (url) => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const [state, setState] = useState({data:{}, loading:true ,error:''})
    
    useEffect(() => {
       handleFetch()
    }, [])

    function handleFetch(){
        setState({data:{}, loading:true ,error:''})
        fetch(corsAnywhere + url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }),
        })
        .then(response => response.json())
        .then(quote => setState({data:quote, loading:false,error:''}))
        .catch(err=>setState({data:{}, loading:false,error:'Error al realizar la peticion'}))
    }
    return {state, handleFetch};
}
