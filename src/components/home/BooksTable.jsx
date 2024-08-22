import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

function BooksTable({ books }) {
    return (
        <div>
            <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="bg-neutral-900 rounded-sm">No</th>
                        <th className="bg-neutral-900 rounded-sm">Title</th>
                        <th className="bg-neutral-900 rounded-sm max-md:hidden">Author</th>
                        <th className="bg-neutral-900 rounded-sm max-md:hidden">Publishing Year</th>
                        <th className="bg-neutral-900 rounded-sm">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book._id} className='h-8'>
                            <td className="bg-neutral-700 rounded-sm text-center"> {index + 1} </td>
                            <td className="bg-neutral-700 rounded-sm text-center"> {book.title} </td>
                            <td className="bg-neutral-700 rounded-sm text-center max-md:hidden"> {book.author} </td>
                            <td className="bg-neutral-700 rounded-sm text-center max-md:hidden"> {book.publishYear} </td>
                            <td className="bg-neutral-700 rounded-sm text-center">
                                <div className="flex justify-center items-center gap-x-4">
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-500 transition-all duration-500 hover:text-green-700 hover:scale-110' />
                                    </Link>
                                    <Link to={`/books/edit/${book._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-500 transition-all duration-500 hover:text-yellow-700 hover:scale-110' />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-500 transition-all duration-500 hover:text-red-700 hover:scale-110' />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default BooksTable
