import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Blog  from "./Components/Blog";
import ContactUs from "./Components/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path : '/Blog',
    element : <Blog />
  },
  {
    path : '/ContactUs',
    element : <ContactUs />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
