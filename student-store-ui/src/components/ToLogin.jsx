import "./ToLogin.css"
import { Link } from "react-router-dom";

function ToLogin() {
    return (
        <div className = "loginpage">
            <Link to="/login">
                <button>Log In</button>
            </Link> 
        </div>
    );
}

export default ToLogin;