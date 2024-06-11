import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Main from "./layout/Main"
import Post from "./layout/Post"
import { Yes } from "./layout/Yes"
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main/>
    },
    {
      path:"/page2",
      element:<Post/>
    },
    {
      path:"/page3",
      element:<Yes/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App