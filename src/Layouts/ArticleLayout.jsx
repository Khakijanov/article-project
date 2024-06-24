import React from 'react'
import { Outlet } from 'react-router-dom'

function ArticleLayout() {
  return (
    <div>
        <h1 className={'text-[40px] text-blue-700 font-semibold text-center py-14' }>Do you want to travel</h1>
        <Outlet>
            
        </Outlet>
    </div>
  )
}

export default ArticleLayout