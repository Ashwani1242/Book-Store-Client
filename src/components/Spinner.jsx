import React from 'react'

function Spinner() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='animate-ping w-16 h-16 m-8 rounded-full bg-indigo-500' />
    </div>
  )
}

export default Spinner
