import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-10 px-12'>
        <nav className='flex justify-between mx-4'>
            <div>
                <h1 className='text-black font-bold'>Task Board</h1>
            </div>
            <div>
                <img className='h-10 w-10 cursor-pointer rounded-xl' src="https://th.bing.com/th/id/OIP.QXb0mLjpcyRvJERASa9QOQHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>

        </nav>
    </div>
  )
}

export default Navbar