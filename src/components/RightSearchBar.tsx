import React, { useState } from 'react'
import { EntitiesState } from '../@types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEntity } from '../Redux/actions';

function LeftSearchBar({ getQuery }) {
  const { loading, entities } = useSelector((state: EntitiesState) => state.entities);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('')
  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(fetchEntity(parseInt(query)))
    getQuery(query)
  }
  const entity = entities[parseInt(query)]
  return (
    <>
      <div className="mb-4 w-full ">
        <form action="" onSubmit={handleQuery}>
          <input
            onChange={(e) => setQuery(e.target.value)}
            required
            type="text"
            id="name"
            className=" appearance-none border rounded  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the entity id"
          />
          <button className='border w-full bg-[#ededed]'>Fetch</button>
        </form>
      </div>
      {
        loading ? "loading..." : (
          <div className="border h-[96%] rounded-sm p-4">
            <div>
              {
                loading ? "loading..." : (
                  <>
                    {
                      entity && (
                        <>
                          <div className='py-3'>{entity.overviewFields.field1} </div>
                          <div className='py-3'>{entity.overviewFields.field2} </div>
                          <div className='py-3'>{entity.overviewFields.field3} </div>
                          <div className='py-3'>{entity.overviewFields.field4} </div>
                          <div className='py-3'>{entity.overviewFields.field5} </div>
                          <div className='py-3'>{entity.overviewFields.field6} </div>
                        </>
                      )
                    }
                  </>
                )
              }
            </div>
          </div>
        )
      }
    </>
  )
}
export default LeftSearchBar
