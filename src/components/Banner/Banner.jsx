import React from 'react';
import books from "../../assets/books.jpg"
const Banner = () => {
    return (
        <div className='bg-gray-100 p-16 rounded-xl flex items-center justify-center gap-20 my-10'>
            <div className='w-130 space-y-10'>
                <h1 className='text-5xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className="btn btn-primary">View The List</button>
            </div>
            <div>
                <img className='w-100 rounded-xl' src={books} alt="" />
            </div>
        </div>
    );
};

export default Banner;