import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Lessons from './pages/Lessons.jsx'
import Rentals from './pages/Rentals.jsx'
import Instructors from './pages/Instructors.jsx'
import Facility from './pages/Facility.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/lessons",
        element: <Lessons />,
      },
      {
        path: "/rentals",
        element: <Rentals />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/facility",
        element: <Facility />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
