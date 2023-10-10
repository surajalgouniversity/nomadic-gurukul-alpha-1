import {Fragment, useEffect, useState} from "react";
import {Outlet, Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    const [isSignup, setIsSignUp] = useState(false)
    useEffect(() => {
        setIsSignUp(localStorage.getItem('Email'))
    }, []);
    const clearLocal = () => {
        localStorage.clear();
        navigate('/')
        window.location.reload();
    }
    return (
        <Fragment>
            <div className='nav-bar'>

                <Link to='/' className="nav-link ">
                    <figure className="ng">

                    </figure>
                </Link>

                <Link to='/' className="nav-link ">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <figure className="small-h"></figure>
                        &nbsp;
                        Home
                    </div>
                </Link>


                {
                    !isSignup
                        ?
                        <Link to='/signin' className="nav-link ">
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <figure className="small-su"></figure>
                                &nbsp;
                                Sign Up
                            </div>
                        </Link>
                        :
                        <Fragment>
                            <Link to='/quiz' className="nav-link ">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <figure className="small-q"></figure>
                                    &nbsp;
                                    Quiz
                                </div>
                            </Link>
                            <Link to='/profile' className="nav-link small-p">
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <figure className="small-p"></figure>
                                    &nbsp;
                                    Profile
                                </div>
                            </Link>
                            <a className="nav-link" onClick={clearLocal}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <figure className="small-su"></figure>
                                    &nbsp;
                                    logout
                                </div>
                            </a>
                        </Fragment>
                }


                <Link to='/contactus' className="nav-link ">
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <figure className="small-c"></figure>
                        &nbsp;
                        Contact Us
                    </div>
                </Link>

            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;