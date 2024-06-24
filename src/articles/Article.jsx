import React from 'react'
import {useFetch} from '../hooks/useFetch'
import { NavLink } from 'react-router-dom'

function Article() {
    const {data,loading, error} = useFetch('https://online-json-server-api.up.railway.app/project/66794a821d2cd3eb114409d0/articles')
  return (
    <div className={'flex gap-3'}>
      
        {loading && <h2>loading...</h2> }
        {error && <h2>Not Found</h2> }
        {data && data.data.map((item)=>{
            console.log(item.image)
            return <div className="card bg-base-100 image-full w-96 shadow-sm z-0">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-white">{item.title}</h2>
    <p>{item.author}</p>
    <div className="card-actions justify-end">
      <NavLink to={""} className="btn btn-primary">Learn More</NavLink>
    </div>
  </div>
</div>
        })}
    </div>
  )
}

export default Article