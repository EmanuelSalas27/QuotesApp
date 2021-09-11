import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({data:{}, loading:true ,error:''})
    
    useEffect(() => {
       handleFetch()
    }, [])

    function handleFetch(){
        setState({data:{}, loading:true ,error:''})
        fetch(url)
        .then(response => response.json())
        .then(quote => setState({data:quote, loading:false,error:''}))
        .catch(err=>setState({data:{}, loading:false,error:'Error al realizar la peticion'}))
    }
    return {state, handleFetch};
}
