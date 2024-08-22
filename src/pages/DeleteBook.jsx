import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { BASE_URL } from '../../config'

function DeleteBook() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  const handleDeleteBook = () => {
    setLoading(true)
    axios
      .delete(`${BASE_URL}/api/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        alert('Unexpected Error, Try Again Later')
        setLoading(false)
      })
  }

  return (
    <div className='p-4'>
      <div className="flex p-8 gap-8 items-center">
        <BackButton />
        <h1 className="text-3xl">Delete Book</h1>
      </div>
      {loading ? (<Spinner />) : (
        <div className="flex flex-col items-center border-2 border-indigo-400 rounded-md w-[600px] p-8 mx-auto">
          <h3 className="text-2xl">Are you sure you want to delete this Book?</h3>
          <button className="p-2 bg-red-500 text-white mt-8 mb-2 w-full rounded-sm transition-all duration-500 hover:bg-red-700" onClick={handleDeleteBook}>
            Yes, Delete Book
          </button>
          <button className="p-2 bg-indigo-500 text-white mt-2 w-full rounded-sm transition-all duration-500 hover:bg-indigo-700" onClick={() => {navigate('/')}}>
            Don't Delete It
          </button>
        </div>
      )}
    </div>
  )
}

export default DeleteBook
