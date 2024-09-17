import { NavDashboard } from "../components/NavDashboard";

import {Routes, Route } from "react-router-dom" ;
import Product from "./Product";



export const Dashboard = () => {

    return (
        <>
        <NavDashboard/>
        <div>
            <h1>Dashboard</h1>
        </div>
        <Routes>
            <Route path="/Product" element={<Product/>}/>
        </Routes>
        </>
    )
}
