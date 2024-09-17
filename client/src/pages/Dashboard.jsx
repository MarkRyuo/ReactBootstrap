import { NavDashboard } from "../components/NavDashboard";

import {Routes, Route } from "react-router-dom" ;
import Product from "./Product";



export const Dashboard = () => {

    return (
        <>
        <NavDashboard/>
        <Container fluid='lg'>
            <h1>Dashboard</h1>
        </Container>
        <Routes>
            <Route path="/Product" element={<Product/>}/>
        </Routes>
        </>
    )
}
