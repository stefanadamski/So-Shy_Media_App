import React, {useState} from "react";
import {useHistory} from "react-router";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length < 5 || email.indexOf("@") === -1) {
            alert("Please enter a valid e-mail address");
            return false;
        }
        if (password.length < 8) {
            alert("Please enter at least 8 characters");
            return false;
        }
        if (!password.match(passPattern)) {
            alert("Include at least one small letter, one capital letter and one number.");
            return false;
        }
        else {
            history.push('/dashboard')
        }
    }
    return (
        <>
            <div className='container'>
                <div className="full_form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label className='form_label'> Email </label>
                        <input type="email"
                               className="input_style"
                               value={email}
                               placeholder="john@veryshy.com"
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className='form_label'> Password </label>
                        <input
                            type="password"
                            placeholder="**********"
                            className="input_style"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className='button_center'>
                            <button className="login_button">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
