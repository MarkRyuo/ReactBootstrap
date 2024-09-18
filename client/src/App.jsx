import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Login } from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import { Dashboard } from './pages/Dashboard';
import Product from './pages/Product';

function App() {


  return (
    <Router>
      <div className='App'>
          <div className='Content'>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/Dashboard' element={<Dashboard/>}/>
              <Route path='/Product' element={<Product/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App
