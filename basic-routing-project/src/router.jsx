import { createBrowserRouter } from 'react-router-dom'
import Posts from './components/Posts'
import Users from './components/Users'
import Todos from './components/Todos'
import NavBar from './components/Navbar'

export const router = createBrowserRouter([
  { path: '/', element: <NavBar/> },
  { path: '/posts', element: <Posts /> },
  { path: '/users', element: <Users /> },
  { path: '/todos', element: <Todos /> },
])
