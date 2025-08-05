import { LOGO_URL } from "../utils/constant";


const Header = () =>{
    let BtnName = "login"
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login"
                 onClick={() => {
                    BtnName = "logout";
                    console.log(BtnName);
                 }} >
                 {BtnName}
                </button>
            </ul>
        </div>
        </div>
    )
}

export default Header;