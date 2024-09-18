import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Login } from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;

import Product from './pages/Product';
import Dash from './components/Dash';
import { Dashboard } from './pages/Dashboard';

function App() {


  return (
    <Router>
      <div className='App'>
          <div className='Content'>
            <Routes>
              <Route path='/' element={<Login />}/> {/* Root */}
              <Route path='/Dashboard' element={<Dashboard />}>
                <Route path=' Dash' element={<Dash />}/>
                <Route path=' Product' element={<Product />}/>
              </Route>
            </Routes>
          </div>
      </div>
    </Router>
  )
}

export default App
