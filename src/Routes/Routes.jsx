import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPages from '../pages/ErrorPages/ErrorPages';
import Home from '../pages/Home/Home';
import About from '../components/About/About';
import BookDetails from '../pages/Books/BookDetails';
import ReadList from '../components/ReadList/ReadList';



export const router = createBrowserRouter([
  {
    path: "/",
        Component: Root,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
            index: true,
              path:'/home',
            Component: Home,
            hydrateFallbackElement:<h1>Loading....</h1>,
                loader: ()=>fetch('/data/booksData.json')
          },
          {
            path: '/about',
            Component: About
          },
          {
            path: '/book-details/:id',
            hydrateFallbackElement:<h1>Loading....</h1>,
            loader: ()=>fetch('/data/booksData.json'),
            Component: BookDetails
          },
          {
            path: 'readlist',
            Component: ReadList,
            loader: ()=>fetch('/data/booksData.json')
          }
    ]
  },
]);