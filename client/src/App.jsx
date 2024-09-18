import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Login } from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;

import Product from './pages/Product';
import Dash from './components/Dash';
import { Dashboard } from './pages/Dashboard';
import { Container } from 'react-bootstrap';

function App() {


  return (
    <Router>
      <div className='App'>
          <Container className='Content'>
            <Routes>
              <Route path='/' element={<Login />}/> {/* Root */}
              <Route path='/Dashboard' element={<Dashboard />}>  {/**Parent */}
                {/* Childs */}
                <Route path=' Dash' element={<Dash />}/> 
                <Route path=' Product' element={<Product />}/>
              </Route>
            </Routes>
          </Container>
      </div>
    </Router>
  )
}

export default App
