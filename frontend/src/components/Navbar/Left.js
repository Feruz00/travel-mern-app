import {Link} from "react-router-dom";
function Left(){
    return <div className="nav__items">
        <Link  className="nav__brand" to="/"> Travel </Link> 
        <Link className="nav__item" to="/"> Home </Link>
    </div>
}
export default Left;