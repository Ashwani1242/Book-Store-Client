import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='bg-neutral-700 rounded-md px-4 py-2 m-4 relative hover:shadow-xl'>
            <div className='flex justify-between items-center pb-4'>
                <h2 className='px-4 py-1 bg-neutral-900 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-400 bg-neutral-900 rounded-md px-4 py-1'>{book._id}</h4>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.author}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow
                    className='text-3xl text-blue-500  transition-all duration-500 hover:text-blue-700 hover:scale-110 cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
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
            {showModal && (
                <BookModal book={book} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default BookSingleCard