import React, { useState } from 'react'
import LeftSearchBar from './components/LeftSearchBar'
import CombainedResults from './components/CombainedResults'
import RightSearchBar from './components/RightSearchBar'

function App() {
  const [leftQuery, setLeftQuery] = useState<number>(0)
  const [rightQuery, setRightQuery] = useState<number>(0)
  const getLeftQuery = (id) => { setLeftQuery(parseInt(id)) }
  const getRightQuery = (id) => { setRightQuery(parseInt(id)) }
  return (
    <>
      <h1 className=' text-center font-3xl font-bold mt-4'>Three columns app</h1>
      <div className='shadow-sm p-5 border  md:h-[78vh] h-[130vh]  mt-[20px] md:mx-[30px] mx-[15px] flex flex-wrap gap-2 justify-between  rounded-sm'>
        <div className=" w-[48%]   md:w-[25%] md:h-[88%] h-[40%] order-1 md:order-normal   ">
          <LeftSearchBar getQuery={getLeftQuery} />
        </div>
        <div className='w-full mx-0  md:w-[44%] md:h-[88%]  h-[40%] md:mx-3 order-3 md:order-normal'>
          <CombainedResults leftQuery={leftQuery} rightQuery={rightQuery} />
        </div>
        <div className="w-[48%]  md:w-[25%] md:h-[88%] h-[40%] order-2  md:order-normal">
          <RightSearchBar getQuery={getRightQuery} />
        </div>
      </div>
    </>
  )
}

export default App
