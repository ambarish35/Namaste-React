import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {

    const [buttonText, setButtonText] = useState("Login")


    const clickHandler = ()=> {
        buttonText == "Login"?setButtonText("LogOut"):setButtonText("Login");

    }
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    alt="logo"
                    className="logo"
                    src={LOGO_URL}
                ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button onClick={clickHandler}>{buttonText}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header