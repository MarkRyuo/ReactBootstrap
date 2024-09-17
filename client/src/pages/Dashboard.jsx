import { NavDashboard } from "../components/NavDashboard";

import {Routes, Route } from "react-router-dom" ;
import Product from "./Product";
import { Container } from "react-bootstrap";


export const Dashboard = () => {

    return (
        <>
        <Container fluid='lg'>
            <h1>Dashboard</h1>
        </Container>
        <Routes>
        <NavDashboard/>
            <Route path="/Product" element={<Product/>}/>
        </Routes>
        </>
    )
}
