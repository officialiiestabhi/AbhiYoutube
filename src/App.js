import Navbar from "./Components/Navbar";
import WatchPage from "./Components/WatchPage"
import Body from "./Components/Body";
import './App.css';
import { Provider } from "react-redux";
import store from "./utils/store"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./Components/Maincontainer";


function App() {
  return (
    <Provider store={store}>
    <div>
     <Navbar/>
     <RouterProvider router={AppRouter}/>
    </div>
    </Provider>
   
  );
}
const AppRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>
    },
    {
      path:"watch",
      element:<WatchPage/>
    }
  ]
}])
export default App;
