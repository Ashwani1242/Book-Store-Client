import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { BASE_URL } from '../../config'

function EditBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    setLoading(true)

    axios
    .get(`http://localhost:8000/api/books/${id}`)
    .then((res) => {
      setTitle(res.data.title)
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      alert('Unexpected Error, Try Again Later')
      setLoading(false)
    })

  }, [])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true)

    axios
      .put(`${BASE_URL}/api/books/${id}`, data)
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
        <h1 className="text-3xl">Edit Book</h1>
      </div>

      {loading ? (<Spinner />) :
        (
          <div className="flex flex-col border-2 border-indigo-400 rounded-md w-[600px] p-4 mx-auto">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500"> Title </label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-gray-500 rounded-sm px-4 py-2 w-full" />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500"> Author </label>
              <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="border-2 border-gray-500 rounded-sm px-4 py-2 w-full" />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500"> Publishing Year </label>
              <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className="border-2 border-gray-500 rounded-sm px-4 py-2 w-full" />
            </div>
            <button className="p-2 bg-indigo-500 mb-4 mt-8 rounded-sm transition-all duration-500 hover:bg-indigo-700" onClick={handleEditBook}> Edit </button>
          </div>
        )}

    </div>
  )
}

export default EditBook
