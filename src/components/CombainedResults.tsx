
import RightPreview from './LeftPreview';
import LeftPreview from './LeftPreview';

function CombainedResults({ leftQuery, rightQuery }) {
  return (
    <div className='w-full h-[113%] border rounded-sm p-5  flex justify-between'>
      <div>
        {
          leftQuery > 0 && (
            <LeftPreview query={leftQuery} />
          )
        }
       </div>
      <div>
        {
          rightQuery > 0 && (
            <RightPreview query={rightQuery} />
          )
        }
       </div>
    </div>
  );
}

export default CombainedResults

