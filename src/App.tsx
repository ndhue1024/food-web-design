import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import ScrollToTop from '@atoms/ScrollToTop';
import TopBar from '@organisms/TopBar';
import Header from '@organisms/Header';
import Footer from '@organisms/Footer';

import Home from '@pages/Home';
import About from '@pages/About'; 
import Menu from '@pages/Menu';
import Book from '@pages/Book';
import Blog from '@pages/Blog';
import Contact from '@pages/Contact';
import BlogDetail from '@pages/BlogDetail';

const Layout = () => {
  return (
    <ScrollToTop>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />},
      { path: "/about", element: <About />},
      { path: "/menu", element: <Menu />},
      { path: "/book", element: <Book />},
      { path:"/blog", element: <Blog />},
      { path: "/contact", element: <Contact />},
      { path: "/blog-detail", element: <BlogDetail />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
