/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  // Navigate,
} from 'react-router-dom';
import Posts from "./components/Posts.jsx";
import BlogPost from './components/BlogPost.jsx';
import App from './App.jsx';


const RouterWrapper = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Posts />,
        },
        {
          path: "/posts/:id",
          element: <BlogPost />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterWrapper />
  </StrictMode>,
)
