import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function BackButton({ destination = '/' }) {
    return (
        <div className='flex'>
            <Link to={destination} className='bg-indigo-500 text-white px-4 py-1 rounded-sm w-fit transition-all duration-500 hover:bg-indigo-700'>
                <BsArrowLeft className='text-2xl' />
            </Link>
        </div>
    )
}

export default BackButton
