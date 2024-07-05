

const SubCard = ({Username, Button}) => {
  return (
    <div>
        <div className='w-[270px] rounded-md'>
              <div className='bg-slate-200 mt-5 mx-4 rounded-md'>
                <div className='w-[220px] pt-4 flex p-2 mx-2'>
                  <h1 className='font-semibold text-black w-[180px]'>{Username}</h1>
                  <div className='mx-[0px] bg-sky-800 rounded-sm px-2'>
                  <button className='text-white text-sm font-semibold'>P0</button>
                  </div>
                  
                </div>
                <div>
                  <hr className='h-[2px] bg-black mx-4'/>
                </div>
                <div className='mx-4 mt-1'>
                  <p className='text-sm text-black font-semibold'>It is a long established fact that a reader will be distracted by the 
                  readable content of a page when looking at its layout.</p>
                </div>
                <div className='flex gap-2 mt-3 '>
                <div className=' mx-4'>
                  <h1 className='text-black font-semibold'>@Pravin</h1>
                </div>
                <div className='bg-sky-800 w-[30px] h-[25px] mx-[75px] rounded-sm '>
                  <div className='mx-3 pt-1.5'>
                  <div className='w-1 h-1 bg-white rounded-2xl'></div>
                  <div className='w-1 h-1 bg-white rounded-2xl '></div>
                  <div className='w-1 h-1 bg-white rounded-2xl '></div>
                  </div>
                </div>
                </div>
                <div className='pt-4 pb-4 mx-1'>
                  <button className='bg-sky-800 mx-3 px-8 rounded-md'>{Button}</button>
                </div>
                
              </div>
            </div>
    </div>
  )
}

export default SubCard