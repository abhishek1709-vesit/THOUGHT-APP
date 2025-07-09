import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./Pages/AppLayout"
import { About } from "./Pages/About"
import { ErrorPage } from "./Pages/ErrorPage"
import { NewThought } from "./Pages/NewThought"
import { Profile } from "./Pages/Profile"
import { SignUp } from "./Pages/SignUp"
import { Home } from "./Pages/Home"
import { Feed } from "./Pages/Feed"
import { LogIn } from "./Pages/Login"
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
          path: "/signUp",
          element: <SignUp/>
        },
        {
          path: "/feed",
          element: <Feed/>
        }
      ]
    },
    {
      path:"/login",
      element: <LogIn/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
