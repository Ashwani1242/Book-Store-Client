import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../components/Spinner'
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';
import { BASE_URL } from '../../config';

function Home() {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    const [showType, setShowType] = useState('table')

    useEffect(() => {
        setLoading(true)

        axios
            .get(`${BASE_URL}/api/books`)
            .then((res) => {
                setBooks(res.data.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [])

    return (
        <div className='p-4'>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl my-8"> Books List </h1>
                <div className='flex justify-center items-center gap-x-4'>
                    <button
                        style={{
                            borderBottom: showType === 'table' ? '2px solid white' : 'none',
                        }}
                        className={`hover:bg-indigo-700 px-4 py-1 rounded-sm transition-all duration-500 ${showType === "table" ? "bg-indigo-900" : "bg-indigo-500"}`}
                        onClick={() => setShowType('table')}>
                        List View
                    </button>
                    <button
                        style={{
                            borderBottom: showType === 'card' ? '2px solid white' : 'none',
                        }}
                        className={`hover:bg-indigo-700 px-4 py-1 rounded-sm transition-all duration-500 ${showType === "card" ? "bg-indigo-900" : "bg-indigo-500"}`}
                        onClick={() => setShowType('card')}>
                        Card View
                    </button>
                    <Link to={'/books/create'}>
                        <MdOutlineAddBox className='text-indigo-500 text-4xl bg-neutral-900 rounded-sm ml-2 p-2 h-12 w-12 transition-all duration-500 hover:text-indigo-700 hover:scale-110' />
                    </Link>
                </div>
            </div>

            {loading ? (<Spinner />) : (showType === "table" ? <BooksTable books={books} /> : <BooksCard books={books} />)}
        </div>
    )
}

export default Home
