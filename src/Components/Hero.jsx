import Card from './Card';
import HalfCard from './HalfCard';


const Hero = () => {
  return (
    <div className='rounded-xl border-2 border-solid border-white mx-5 my-10 pb-3'>
        <div>
        <div className='mt-2 mb-2 px-2 py-2 mx-9 flex justify-between'>
            <div>
            <div>
                <label className='text-black font-semibold' htmlFor='Filter By'>Filter By: </label>
                <input className='w-30 mx-3 rounded-md text-black text-center' type='text' name='name' />
                <input className='w-30 mx-3 rounded-md text-black text-center' type='text' name='name' />
                <input className='font-semibold text-black w-40 mx-3 rounded-md text-center' type='date' value={""}/>
            </div>
            <div className='mt-6'>
                <label className='text-black font-semibold' htmlFor="Radio">Sort By: </label>
                <input className='rounded-md mx-5 text-black text-center' type='text' name='priority'/>
            </div>
            </div>
            <div>
                <button className='bg-sky-800 rounded-md cursor-pointer px-8 p-2 text-sm'>Add New Work</button>
            
            </div>
        </div>    
        <div className='justify-between md:flex md:flex-wrap'>
            <Card Cards='Pending' CButton='Assign' CUsername1='Task 1' CUsername2='Task 2'/>
            <HalfCard title='In Progress' HButton='In progress' HUsername='Task 3' />
            <HalfCard title='Completed' HButton='Completed' HUsername='Task 4'/>
            <Card Cards='Deployed' CButton='Deployed' CUsername1='Task 5' CUsername2='Task 6'/>
           
            <HalfCard title='deffered' HButton='Deffered' HUsername='Task 7'/>

           

        </div>
                    

            
        </div>
    </div>
  )
}

export default Hero