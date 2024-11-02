import { Outlet, Link } from "react-router-dom";
import Navbar from "./Nav";

import './Layout.css'

function Layout(){

    return(

        <div className="wrapper">

        
            <Outlet/>

        </div>

        


    )

}

export default Layout;