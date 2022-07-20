import { Outlet, Link } from "react-router-dom";
import "./style.css";

export const NavHomePage = () => {
  return (
    <>
      <nav>

          <Link to="/teste1" className={"navHomePages"}>
            <p className="fontNav">Crachá</p>
          </Link>
        <Link to="/teste2" className={"navHomePages"}>
          <p className="fontNav"> Extrato</p>
         
        </Link>
        <Link to="/serviceDesk" className={"navHomePages"}>
          <p className ="fontNav"> Service Desk</p>
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
