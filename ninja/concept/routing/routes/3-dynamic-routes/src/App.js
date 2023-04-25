import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Items from './pages/Items';
import ItemDetails from './pages/ItemDetails';

function App() {
 const router= createBrowserRouter([
  {path: '/', element:<NavBar/>,children:[
  {path: '/', element:<Home/>},
  {path: '/about', element:<About/>},
  {path: '/items', element:<Items/>},
  {path:"items/:itemId",element: <ItemDetails/>},
]}, 
 ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
