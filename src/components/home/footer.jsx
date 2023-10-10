import {Fragment} from "react";
import Heart from '../../img/heart.svg'

export default function Footer() {
    return (
        <Fragment>
            <div className="footer">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    Made with at &nbsp; <img className="Heart" width="30rem" height="30rem" src={Heart}
                                             alt="heart"/> &nbsp; Algouniversity
                </div>
            </div>
        </Fragment>
    )
}