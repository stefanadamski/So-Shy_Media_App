import logo from '../../assets/logo.png';
import Login from "./Login";
import './start.css'
import {Backdrop} from "@material-ui/core";
import Bubbles from "../Dashboard/Bubbles/Bubbles";

function StartPage() {
    return (<>
        <Bubbles/>
        <div className="start">
            <header className="start-header">
                <img src={logo} className="start-logo" alt="logo" />
                <p className="start-description">
                    For very young introverts and shy people. Learn how to create posts <br/>
                    and then dare to publish them on social media platforms.
                </p>
                <Login/>
            </header>
        </div>
        </>
    );
}

export default StartPage;
