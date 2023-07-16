import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ContactPage from "./pages/Contact.jsx";
import AboutUsPage from "./pages/AboutUs.jsx";
import ProjectsPage from "./pages/Projects.jsx";
import "./index.css";
import ErrorPage from "./pages/error-page.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root_router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contactus",
    element: <ContactPage />,
  },
  {
    path: "/aboutus",
    element: <AboutUsPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={root_router} />
  </React.StrictMode>
);
