import React from 'react'
import { EntitiesState } from '../@types';
import { useSelector } from 'react-redux';

function RightPreview({ query }) {
  const { entities, loading } = useSelector((state: EntitiesState) => state.entities);
  const entity = entities[parseInt(query)]
  return (
    <div>
      {
        loading ? "loading..." : (
          <>
            {
              entity && (
                <>
                  <div className='py-3'>{entity.detailedFields.field1} </div>
                  <div className='py-3'>{entity.detailedFields.field2} </div>
                  <div className='py-3'>{entity.detailedFields.field3} </div>
                  <div className='py-3'>{entity.detailedFields.field4} </div>
                  <div className='py-3'>{entity.detailedFields.field5} </div>
                  <div className='py-3'>{entity.detailedFields.field6} </div>
                </>
              )
            }
          </>
        )
      }
    </div>
  )
}

export default RightPreview

