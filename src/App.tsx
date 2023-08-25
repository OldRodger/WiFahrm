import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout";
import AuthenticationPage, { action as submitAuthFormAction } from "./pages/auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <Root /> },
        { path: "auth", element: <AuthenticationPage />, action: submitAuthFormAction, id: "authPage" }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
