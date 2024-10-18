import { Link } from "react-router-dom"
import { AuthContext } from "../../App";
import { useContext } from "react";

export const Main = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    return (
        <>
            {!isAuth && (<Link to='/auth'>auth</Link>)}
            {!isAuth && (<Link to='/register'>register</Link>)}
            {isAuth && (<Link to='/profile'>profile</Link>)}
            <div className="main">main page</div>
        </>
    );
};