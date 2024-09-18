import { NavDashboard } from "../components/NavDashboard";

import {Outlet } from "react-router-dom" ;
import { Container } from "react-bootstrap";


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
