import { useSelector,useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import { User_Auth, User_Logout } from "../../_actions/user";

function Right(){
    const dispatch = useDispatch();
    
    const user = useSelector( state => state.user );
   
    const logout = useSelector( state => state.logout );

    useEffect( ()=>{
      dispatch( User_Auth );
    },[logout] );

    
    const [toggle , setToggle] = useState(false);

    if(!user){ // login register bolmaly
        return <div className="nav__items">
            
            <Link  className="nav__item" to="/login"> Sign In </Link>
            <Link  className="nav__item" to="/register"> Sign Up </Link>   
            <div className="nav__button"> 
                <i className={'bx ' + ( !toggle ? ' bx-menu' : ' bx-x') } 
                onClick = {()=>setToggle(!toggle)}></i>
            </div>
            {/* <i class='bx bx-x'></i> */}
            <div className="mob" style = {{ display: !toggle? 'none' : 'flex' }}>
            <Link className="mob__item" to="/"> Home </Link>
            <Link  className="mob__item" to="/login" > Sign In </Link>
            <Link  className="mob__item" to="/register"> Sign Up </Link>   
            </div>
        </div>
    }
    else{
        // basga variant
        return <div className="nav__items">
            
            <Link  className="nav__item" to = "/upload">Upload</Link>
            <div  className="nav__item nav__img" style ={{ display: 'block' }} >
                <img src="img.jpg" alt="profile" /> 
            </div>
            <Link className="nav__item" to="/profile">
                dante2000
            </Link>
            <div className="nav__item"  onClick = { dispatch( User_Logout ) }>
                Logout
            </div>
            <div className="nav__button"> 
                <i className={'bx ' + ( !toggle ? ' bx-menu' : ' bx-x') } 
                onClick = {()=>setToggle(!toggle)}></i>
            </div>
            {/* <i class='bx bx-x'></i> */}
            <div className="mob" style = {{ display: !toggle? 'none' : 'flex' }}>
            <Link className="mob__item" to="/"> Home </Link>
            <Link  className="mob__item" to="/upload" > Upload </Link>   
            <div className="mob__item" onClick = { dispatch( User_Logout ) }>
                Logout
            </div>
            
            </div>

        </div>
    }
}
export default Right;