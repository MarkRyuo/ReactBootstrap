import { NavDashboard } from "../components/NavDashboard";

import {Outlet } from "react-router-dom" ;
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
