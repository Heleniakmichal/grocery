import {Outlet, Link} from "react-router-dom";
import "../components/style.css";

function Layout () {

  return (
<>
  <nav className="navbar">
    <ul className="navbarList">
      <li>
        <Link className="navLink" to="/">Home</Link>
      </li>
      <li>
        <Link className="navLink" to="/listpage">List</Link>
      </li>
    </ul>
  </nav>
  <Outlet />
</>

  )
} 

export default Layout;