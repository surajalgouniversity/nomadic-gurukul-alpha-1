import {Fragment, useEffect, useState} from "react";
import {auth, provider} from "../../utils/firebase/firebase.jsx";
import {signInWithPopup} from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './justSomething.scss'
import {useNavigate} from 'react-router-dom';


function SignIn({}) {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("Email", data.user.email);
            localStorage.setItem("Name", data.user.displayName);
            localStorage.setItem("Uid", data.user.uid);
            localStorage.setItem("Photo", data.user.photoURL);

            navigate('/');
            window.location.reload();
        })
    };
    useEffect(() => {
        setValue(localStorage.getItem('Email'))
    }, []);

    const clearLocal = () => {
        localStorage.clear();
        window.location.reload();
    }

    const alertFunction = () => {
        alert(`Registered ${localStorage.getItem('Email')}`)
    }
    return (
        <Fragment>
            <div className="homepage">
                <div className="main">
                    {value ? <>
                            <button className="btn" onClick={alertFunction}>Continue</button>
                            <button className="btn" onClick={clearLocal}>Logout</button>
                            {window.location.reload()}
                        </> :
                        <button className="btn" onClick={handleClick}>Continue with google</button>}
                </div>
            </div>
        </Fragment>
    )
}

export default SignIn;