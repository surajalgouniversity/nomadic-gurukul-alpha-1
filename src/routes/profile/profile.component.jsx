import {Fragment, useEffect, useState} from "react";
import axios from "axios";

export default function Profile({profile}) {


    return (
        <Fragment>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="heading-secondary u-margin-bottom-medium">
                        Name: {profile.name}
                    </div>
                    <div className="heading-secondary">
                        Email: {profile.email}
                    </div>
                    <div className="heading-secondary">
                        Score: {profile.score}
                    </div>

                </div>
                <div className="col-1-of-2">

                </div>
            </div>
        </Fragment>
    )
}