/*import Navbar from './Components/NavBar'*/
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import MyDrawer from './Components/Header/MyDrawer'
function App2() {

  return (
  <div className="App">
    <BrowserRouter>
      <MyDrawer/>
       <Routes/>
    </BrowserRouter>
    </div>
  );
}

export default App2;


