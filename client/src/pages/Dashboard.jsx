import { NavDashboard } from "../components/NavDashboard";

import {Routes, Route } from "react-router-dom" ;
import Product from "./Product";
import { Container } from "react-bootstrap";
import Dash from "../components/Dash";


export const Dashboard = () => {

    return (
        <>
            <Container fluid='lg'>
                <NavDashboard/>
                <Routes>
                    <Route path="/Dash" element={<Dash/>}/>
                    <Route path="/Product" element={<Product/>}/>
                </Routes>
            </Container>
        </>
    )
}
