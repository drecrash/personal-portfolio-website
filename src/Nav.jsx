import { Link } from "react-router-dom"
import routeData from './assets/resources/routes.json'

function Navbar(){

    const link_styling = {
        textDecoration: "underline",
        color: "black"
    }
    return (
        <nav>

            <ul>
                <li>
                    <Link to={routeData.index} style={link_styling}>Home</Link>
                </li>
                {/* <li>
                    <Link to={routeData.projects} style={link_styling}>Projects</Link>
                </li> */}
                <li>
                    <Link to={routeData.resume} style={link_styling}>Resume</Link>
                </li>
            </ul>
            




        </nav>
    )
}

export default Navbar