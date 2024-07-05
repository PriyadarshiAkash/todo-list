import React from 'react'

const AddWork = () => {
  return (
    <div className='bg-white h-auto w-auto'>
      <nav className='flex'>
        <div className='text-sm text-black font-bold'>CREATE A TASK</div>
        <div className='h-4 w-4 mx-8 justify-center'>
          <button >
            <img src="data:image/jpeg;base64,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" alt="" />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default AddWork