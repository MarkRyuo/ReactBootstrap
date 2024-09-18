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

          </div>
      </div>
    </Router>
  )
}

export default App
