//import About from "@/pages/About";
import Home from "@/pages/Home";
//import NoMatch from "@/pages/NoMatch";
import type { ReactNode } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter(createRoutesFromElements([
      <Route path="/*" element={<Home />} />,
      //<Route path="about/*" element={<About />} />,
      //<Route path="/*" element={<NoMatch />} />
]))

const AppProvider = (): ReactNode => {
    return (
        <RouterProvider router={ appRouter } />
    )
}

export default AppProvider
