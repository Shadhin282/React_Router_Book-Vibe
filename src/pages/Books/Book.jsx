import React from 'react';
import { Link } from 'react-router';

const Book = ({ fetchData }) => {
    const {bookId,bookName,author,image,category,totalPages} = fetchData
    return (
      <Link to={`/book-details/${bookId}`}>
        <div>
            <div className="card bg-base-100 w-full h-110 shadow-lg">
  <figure className=' '>
    <img className='h-70 w-80 rounded-xl'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
                        {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
                    <p> By: {author}
                    </p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{category}</div>
    <div className="badge badge-outline">{ totalPages}</div>
                       
    </div>
  </div>
</div>
        </div>
      </Link>
    );
};

export default Book;