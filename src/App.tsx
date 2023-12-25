import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Menu } from './pages/menu/Menu';
import { Book } from './pages/book/Book';
import { Blog } from './pages/blog/Blog';
import { Contact } from './pages/contact/Contact';
import { BlogDetails } from './pages/blog-details/BlogDetails';

const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <Home />},
      { path: "/about", element: <About />},
      { path: "/menu", element: <Menu />},
      { path: "/book", element: <Book />},
      { path:"/blogs", element: <Blog />},
      { path: "/contact", element: <Contact />},
      { path: "/blog-details", element: <BlogDetails />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
