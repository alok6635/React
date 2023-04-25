import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Item from "./pages/Item";

function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/item" element={<Item/>}/>
    </>
  );
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
