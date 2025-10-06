import React, { useState,useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Book from './Book';
import { Suspense } from 'react';

const Books = ({dataFetch}) => {
    // const [allBooks, setAllBooks] = useState([])

    // const dataFetch = fetch('/data.json').then(res=>res.json()).then(data=> (data))
            console.log(dataFetch)
    
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Books</h1>
            <Suspense className='flex' fallback={<span>Loading ....</span>}>
                <div className='grid grid-cols-3 gap-5'>
                      {
                dataFetch.map(fetchData => <Book key={fetchData.bookId} fetchData={fetchData}></Book>)
            }
              </div>
            </Suspense>
        </div>
    );
};

export default Books;