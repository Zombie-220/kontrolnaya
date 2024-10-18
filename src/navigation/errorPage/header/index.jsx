import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../../App";

export const Header = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    return (
        <div className="header">
            <Link to='/'>Main</Link>
            {!isAuth && (<Link to='/auth'>auth</Link>)}
            {!isAuth && (<Link to='/register'>register</Link>)}
            {isAuth && (<Link to='/profile'>profile</Link>)}
            {isAuth && (<button onClick={()=>{setIsAuth(false)}}>quit</button>)}
            <Link to='/list'>list</Link>
        </div>
    );
};