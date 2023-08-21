import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout";
import Home from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
