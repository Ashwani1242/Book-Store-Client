import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { BASE_URL } from '../../config'

function ShowBook() {
  const [book, setBook] = useState({})
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)

    axios
      .get(`${BASE_URL}/api/books/${id}`)
      .then((res) => {
        setBook(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className='p-4'>
      <div className="flex p-8 gap-8 items-center">
        <BackButton />
        <h1 className="text-3xl">Show Book</h1>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <dev className="flex flex-col border-2 border-indigo-400 rounded-md w-fit p-4 mx-auto">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID:</span>
            <span> {book._id} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title:</span>
            <span> {book.title} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author:</span>
            <span> {book.author} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publishing Year:</span>
            <span> {book.publishYear} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Created At:</span>
            <span> {new Date(book.createdAt).toString()} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Updated At:</span>
            <span> {new Date(book.updatedAt).toString()} </span>
          </div>
        </dev>
      )}
    </div>
  )
}

export default ShowBook
