import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import DarkContextProvider from "../Context/DarkContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import { Toaster } from "react-hot-toast";
function App() {
  let routers = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "contact", element: <Contact /> },
        { path: "about", element: <About /> },
        { path: "education", element: <Education /> },
        { path: "skills", element: <Skills /> },
        { path: "projects", element: <Projects /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
    <DarkContextProvider>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster/>
    </DarkContextProvider>
    </>
  );
}

export default App;
