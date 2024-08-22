import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
    return (
        <div
            className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose} >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-neutral-700 rounded-md p-4 flex flex-col relative' >
                <div className='rounded-full bg-red-500 p-1 top-4 right-4 absolute transition-all duration-500 hover:bg-red-700 hover:scale-110'>
                    <AiOutlineClose
                        className='text-xl text-white cursor-pointer'
                        onClick={onClose}
                    />
                </div>
                <div className='flex items-center gap-x-6 mb-4'>
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
                <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quia
                    voluptatum sint. Nisi impedit libero eveniet cum vitae qui expedita
                    necessitatibus assumenda laboriosam, facilis iste cumque a pariatur
                    nesciunt cupiditate voluptas? Quis atque earum voluptate dolor nisi
                    dolorum est? Deserunt placeat cumque quo dicta architecto, dolore
                    vitae voluptate sequi repellat!
                </p>
            </div>
        </div>
    );
};

export default BookModal;