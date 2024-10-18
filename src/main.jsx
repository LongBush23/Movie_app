import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@pages/HomePage";
import RootLayout from "@pages/RootLayout";
import MovieDetail from "@pages/MovieDetail";
import TVShowDetail from "@pages/TVShowDetail";
import ModalProvider from "@context/ModalProvider";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>,
);
