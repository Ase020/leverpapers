import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Navbar, Footer } from "./components";
import {
  Home,
  Blog,
  About,
  Blogs,
  Contact,
  MyAccount,
  Pricing,
  Services,
  Order,
} from "./pages";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/blogs/:id",
          element: <Blog />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
        {
          path: "/my-account",
          element: <MyAccount />,
        },
        {
          path: "/order/:id",
          element: <Order />,
        },
        {
          path: "/pricing",
          element: <Pricing />,
        },
        {
          path: "/shop",
          element: <Services />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
