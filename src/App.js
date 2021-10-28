/*import Navbar from './Components/NavBar'*/
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'
import Home4 from './Components/Home4'
function App() {

  return (
  <div className="App">
    <BrowserRouter>
     <Home4/>
     <Routes/>
    </BrowserRouter>
    </div>
  );
}

export default App;


