import { NavDashboard } from "../components/NavDashboard";
import Product from "./Product";



export const Dashboard = () => {

    return (
        <Router>
            <NavDashboard/>
            <Routes>
                <Route path="/Product" element={<Product/>}/>
            </Routes>
        </Router>
    )
}
