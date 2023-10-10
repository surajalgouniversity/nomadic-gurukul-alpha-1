import {Fragment} from "react";
import {Link} from "react-router-dom";

export default function Video() {
    return (
        <Fragment>
            <section className="section-video">
                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Nomadic Gurukul July Edition
                        </h3>
                        <p className="paragraph">
                            A brief overview of what happened at the Nomadic Gurukul July ‘23 to help you understand the
                            camp better.
                        </p>
                        <Link to='/signin' className="btn-text">Sign Up &rarr;</Link>

                    </div>
                    <div className="col-1-of-2">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/VuT6Azci9bI?si=I8WhA5Cnn8D6fCdo"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </section>

        </Fragment>
    )
}