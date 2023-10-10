import HomePage from "../../components/home/home.jsx";
import {Outlet} from 'react-router-dom';

import {Fragment} from "react";

const Home = () => {
    return (
        <Fragment>
            <HomePage/>
            <Outlet/>
        </Fragment>
    )
}

export default Home;
