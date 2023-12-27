import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import ScrollToTop from '@atoms/scrollToTop';
import TopBar from '@organisms/topBar';
import Header from '@organisms/header';
import Footer from '@organisms/footer';

import Home from '@pages/home';
import About from '@pages/about'; 
import Menu from '@pages/menu';
import Book from '@pages/book';
import Blog from '@pages/blog';
import Contact from '@pages/contact';
import BlogDetail from '@pages/blogDetail';

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
