import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utility/AddToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const BookDetails = () => {
    const { id } = useParams()
    const Bookid = parseInt(id)
    const data = useLoaderData()
    const Details = data.find(dataId=> dataId.bookId===Bookid)
    console.log(Details, Bookid)
    const {bookId,bookName,author,image,category,publisher} = Details
   
    const handleMarkAsRead = (id) => {
        // Store with ID
        // where to store
        // Array or collection
        // if item exist 
        // not exist then push
        
        MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading()
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>)
})
        
        addToStoreDB(id)
   }
    return (
        <div className='w-2/3 my-10 mx-auto'>
            <img className='w-100 h-100' src={image} alt="" />
            <h2 className='text-3xl font-bold'>bookName</h2>
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent">Read</button>
<button className="btn btn-info">Wishlist</button>

        </div>
    );
};

export default BookDetails;