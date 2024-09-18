import { NavDashboard } from "../components/NavDashboard";

import {Routes, Route } from "react-router-dom" ;
import Product from "./Product";
import { Container } from "react-bootstrap";


export const Dashboard = () => {

    return (
        <>
        <NavDashboard/>
        <Routes>
            <Route path="/Product" element={<Product/>}/>
        </Routes>
        </>
    )
}
