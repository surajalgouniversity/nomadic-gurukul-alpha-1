import {Link} from "react-router-dom";
import Button from "./button.jsx";

export default function Schedule() {
    return (

        <section className="section-schedule">
            <div className="u-center-text u-margin-bottom-medium">
                <h2 className="heading-secondary">
                    Schedule for 22 hours over a weekend
                </h2>
            </div>

            <div className="row">
                <div className="col-1-of-2">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--1">
                                Saturday
                            </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li><span>Welcome to the Camp! ✨</span></li>
                                    <li>Get comfortable with the campsite and settle in. You will be allocated teams and
                                        camp buddies.
                                    </li>
                                    <li><span>Class One 🎓</span></li>
                                    <li>Introductory session on Graph Theory with Manas Kumar Verma (Founder,
                                        AlgoUniversity)
                                    </li>
                                    <li><span>Barbeque, Bonfire & Dinner 🍽️</span></li>
                                    <li>As the night falls, we tune into fun activities and yummy barbeque camp-side
                                        dinner!
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Free</p>
                                    <div className="card__price-value">₹5000</div>
                                </div>
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--2">
                                &nbsp;
                            </div>
                            <h4 className="card__heading">
                            <span className="card__heading-span card__heading-span--2">
                                Sunday
                            </span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li><span>Sunrise Kayaking in the lake 🌄</span></li>
                                    <li>The camp will be going for some early morning kayaking and lakeside hikes</li>
                                    <li><span>Breakfast 🥣</span></li>
                                    <li>Warm breakfast and some quick refreshments before we gear up for the final
                                        class
                                    </li>
                                    <li><span>Class Two in a boathouse! 🎓</span></li>
                                    <li>Advanced session on Graph theory with Manas Kumar Verma (Founder,
                                        AlgoUniversity) - but in style
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <div className="card__cta">
                                <div className="card__price-box">
                                    <p className="card__price-only">Free</p>
                                    <div className="card__price-value">₹5000</div>
                                </div>
                                <Button/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}