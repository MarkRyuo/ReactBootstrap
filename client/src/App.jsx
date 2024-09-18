import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Login } from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
// import { Dashboard } from './pages/Dashboard';
import Product from './pages/Product';
import { NavDashboard } from './components/NavDashboard';
import Dash from './components/Dash';

function App() {


  return (
    <Router>
      <div className='App'>
          <div className='Content'>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route>
                <Route path='/Dash' element={<Dash/>}/>
                <Route path='/Product' element={<Product/>}/>
              </Route>
            </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App
