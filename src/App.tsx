import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Root /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
