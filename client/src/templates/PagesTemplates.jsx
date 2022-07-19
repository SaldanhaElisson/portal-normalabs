import { render } from "react-dom"
import { Outlet, Link } from "react-router-dom";

import '../assets/styles/global-styles.css'
import '../assets/styles/global-styles-responsive.css'


const PageBlueTemplate = () => {

    return (
        <div className="homePages">
            <nav>
                {/* <Link to="/login">Invoices</Link> |{" "}
                <Link to="/login">Invoices</Link> |{" "}     */}
            </nav>
          
            <Outlet />
        </div>
    )
}

export default PageBlueTemplate