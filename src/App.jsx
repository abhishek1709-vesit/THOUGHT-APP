import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Pages/AppLayout"
import { About } from "./Pages/About"
import { ErrorPage } from "./Pages/ErrorPage"
import { NewThought } from "./Pages/NewThought"
import { Profile } from "./Pages/Profile"
import { Login } from "./Pages/Login"
import { Home } from "./Pages/Home"
import { Feed } from "./Pages/Feed"
const App = () => {

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element:<About/>
        },
        {
          path: "/new-thought",
          element: <NewThought />
        },
        {
          path: "/profile",
          element: <Profile/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/feed",
          element: <Feed/>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
