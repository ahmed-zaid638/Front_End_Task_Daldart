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
      <div className='shadow-sm p-5 border max-w-full h-[78vh] mt-[20px] mx-[30px] flex justify-between  rounded-sm'>
        <div className=" w-[50%] h-[88%]">
          <LeftSearchBar getQuery={getLeftQuery} />
        </div>
        <div className='w-full h-[88%] mx-3'>
          <CombainedResults leftQuery={leftQuery} rightQuery={rightQuery} />
        </div>
        <div className="w-[50%] h-[88%]">
          <RightSearchBar getQuery={getRightQuery} />
        </div>
      </div>
    </>

  )
}

export default App
