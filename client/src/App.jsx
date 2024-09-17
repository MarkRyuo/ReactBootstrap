import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Login } from './pages/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" ;
import { Dashboard } from './pages/Dashboard';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
