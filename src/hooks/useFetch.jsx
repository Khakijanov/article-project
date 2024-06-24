import { useEffect, useState } from "react"


export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading]= useState(false);
    const [error, setEror] = useState(null);


    // serverga so'rov jo'natish
    useEffect(()=>{
        const fetchData = async ()=>{
            setLoading(true);
            try{
                const request = await fetch(url)
                if(!request.ok){
                    throw new Error(request.statusText)
                }
                const response = await request.json()
                setData(response)
                setLoading(false)
            }
            catch(err){
                setEror(err.message);
                console.log(err.message)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
  return (
    {data, loading, error}
  )
}

