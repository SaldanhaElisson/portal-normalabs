import { Outlet, Link, useNavigate } from "react-router-dom";
import {useContext} from "react"
import {GlobalContext} from "../../context/index.jsx"
import { logout } from "../../utils/handles";

import "./style.css";
import "./style-responsive.css"


export const NavHomePage = () => {

  const TheContext = useContext(GlobalContext);
  const {user, setUser} = TheContext;

    
  const navigate = useNavigate()
  const clicado = () =>{
    setUser(null);
    logout()
    navigate("../")
  }

  return (
    <>
      <nav>

        <Link to="crachar" className={"navHomePages"}>
            <p className="fontNav">Crachá</p>
          </Link>
        <Link to="extrato" className={"navHomePages"}>
          <p className="fontNav"> Extrato</p>
         
        </Link>
        {/* <Link to="/serviceDesk" className={"navHomePages"}>
          <p className ="fontNav"> ServiceDesk</p>
        </Link> */}

      <div className="navHomePages" onClick={clicado}>
          <p className="fontNav logout"> Logout</p>
      </div>
       
      </nav>
    </>
  );
};
