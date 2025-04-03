import React, { useState } from 'react'

const GridCard = () => {
    const [hover,setHover]=useState(false)
  return (
    <div className='w-full pb-4 bg-gray-100 rounded-xl relative overflow-hidden' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
      <div className='absolute top-[15px] left-[15px] space-x-2 flex flex-wrap gap-2 z-[100] '>

      </div>
    </div>
  )
}

export default GridCard
