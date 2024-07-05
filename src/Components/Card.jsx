
import SubCard from './SubCard'

const Card = ({Cards, CButton, CUsername1, CUsername2}) => {
    
  return (
    
    <div className=''>
        <div className='w-100 mx-10 py-2 bg-white w-[280px] pt-0 rounded-xl mt-6 mb-3 max-w-auto max-h-auto'>
            <div className='w-[280px] rounded-md'>
                <h1 className='bg-slate-500 text-center rounded-t-xl p-2 font-bold'>{Cards}</h1>
            </div>
        <SubCard Button={CButton} Username={CUsername1}/> 
        <div className='my-5'>
            <SubCard Button={CButton} Username={CUsername2}/>
        </div>   
        </div>
    </div>
   
  )
}

export default Card