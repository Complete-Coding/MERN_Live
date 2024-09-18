import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { AppLayout } from "./components/layout/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout/>,
      children : [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/services",
          element:<Services/>
        },

      ]
    },
    
  ]);
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path = "/" element = {<Home/>}/>
  //       <Route path = "/about" element = {<About/>}/>
  //       <Route path = "/" contact = {<Contact/>}/>
  //       <Route path = "/services" element = {<Services/>}/>
  //     </Route>
  //   )
  // )
  return <RouterProvider router={router} />;
}

export default App;
