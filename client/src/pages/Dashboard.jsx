import { NavDashboard } from "../components/NavDashboard";

import {Routes, Route, Outlet } from "react-router-dom" ;
import Product from "./Product";
import { Container } from "react-bootstrap";
import Dash from "../components/Dash";


export const Dashboard = () => {

    return (
        <>
            <Container fluid='lg'>
                <NavDashboard/>
                <Outlet/>
            </Container>
        </>
    )
}
