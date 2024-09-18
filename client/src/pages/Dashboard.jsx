import { NavDashboard } from "../components/NavDashboard";

import {Outlet } from "react-router-dom" ;
import { Container } from "react-bootstrap";


export const Dashboard = () => {

    return (
        <>
            <Container fluid='lg'>
                <div className="Nav-Container">
                    <NavDashboard/>
                </div>
                <div className="Dash-Content">
                    <Outlet/> {/** Nilalaman ay ang nested route */}
                </div>
            </Container>
        </>
    )
}
