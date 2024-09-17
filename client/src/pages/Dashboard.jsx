import {BrowserRouter as Router, Routes, Route } from "react-router-dom" ; 
import { NavDashboard } from "../components/NavDashboard";



export const Dashboard = () => {

    return (
        <Router>
            <NavDashboard/>
            <Routes>
                <Route path="" element=/>
            </Routes>
        </Router>
    )
}
