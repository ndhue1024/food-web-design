import React from 'react';
import { Home } from './pages/home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About } from './pages/about/About';
import { Menu } from './pages/menu/Menu';

const router = createBrowserRouter([
  {
    children: [
      { path: "/", element: <Home />},
      { path: "/about", element: <About />},
      { path: "/menu", element: <Menu />}
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
