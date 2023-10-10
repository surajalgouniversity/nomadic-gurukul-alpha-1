import {Fragment, useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Button() {
    const [isSignup, setIsSignUp] = useState(false)
    useEffect(() => {
        setIsSignUp(localStorage.getItem('Email'))
    }, []);
    return (
        <Fragment>
            {!isSignup
                ? <Link to='/signin' className="btn btn--white btn--animated">Sign Up</Link>
                : <Link to='/quiz' className="btn btn--white btn--animated">Play Quiz</Link>
            }
        </Fragment>
    )
}