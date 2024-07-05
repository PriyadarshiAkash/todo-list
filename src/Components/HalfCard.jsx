
import SubCard from './SubCard';

const HalfCard = ({title, HButton, HUsername}) => {
  return (
    
        <div className=''>
        <div className='mx-10 py-2 bg-white w-[280px] pt-0 rounded-xl mt-6 mb-3 max-w-auto h-[585px]'>
            <div className='w-[280px] rounded-md'>
                <h1 className='bg-slate-500 text-center rounded-t-xl p-2 font-bold'>{title}</h1>
            </div>
        <SubCard Username={HUsername} Button={HButton}/> 
        <div className='my-5'>
            
        </div>   
        </div>
    </div>
    
  )
}

export default HalfCard