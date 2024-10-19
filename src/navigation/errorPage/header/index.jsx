import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../../App";

import './style.scss';

export const Header = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const navigate = useNavigate()

    const logOut = () => {
        setIsAuth(false);
        navigate('/');
        localStorage.removeItem('user')
    }

    return (
        <div className="header">
            <Link to='/' className="header__link">Main</Link>
            {!isAuth && (<Link to='/auth' className="header__link">auth</Link>)}
            {!isAuth && (<Link to='/register' className="header__link">register</Link>)}
            {isAuth && (<Link to='/profile' className="header__link">profile</Link>)}
            {isAuth && (<button onClick={logOut} className="header__link">quit</button>)}
            <Link to='/list' className="header__link">list</Link>
        </div>
    );
};