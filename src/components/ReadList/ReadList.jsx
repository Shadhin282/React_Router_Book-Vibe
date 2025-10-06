import React,{useEffect,useState} from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utility/AddToDB';
import Book from '../../pages/Books/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const [sort,setSort] = useState('')
    const data = useLoaderData()
    // console.log(data)
    useEffect(() => {
        const storedBookData = getStoreBook()
        // console.log(storedBookData)
        const convertedStoredBook = storedBookData.map(id=>parseInt(id))
        // console.log(convertedStoredBook)
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId))
        // console.log(myReadList)
        setReadList(myReadList)
    }, [])
    
    const handleSort = (type) => {
        setSort(type)
        if (type === 'pages') {
            const sortBypages = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortBypages)
        }
            
    
        if (type === 'ratings') {
            const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortByRatings)
        }
    }
    return (
        <div>

            <details className="dropdown">
                <summary className="btn m-1">Sort By: { sort?sort:''}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>pages</a></li>
    <li><a onClick={()=>handleSort("ratings")}>ratings</a></li>
  </ul>
</details>


            <Tabs>
    <TabList>
                    <Tab>Read BookList {readList.length}</Tab>
      <Tab>My WishList</Tab>
    </TabList>

    <TabPanel>
                    {
                        readList.map(b=><Book key={b.bookId} fetchData={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;