import image1 from '../../img/ng-1.png';
import image2 from '../../img/ng-2.png';
import image3 from '../../img/ng-3.png';
import {Link} from "react-router-dom";


export default function About() {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Nomadic Gurukul
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        What is Nomadic Gurukul?
                    </h3>
                    <p className="paragraph">
                        A unique camp (um, quite literally 🏕️) crafted for techies in Hyderabad for a wholesome learning
                        experience! In the span of 22 hours over a weekend, one will get to learn, engage, and network
                        with some of the best mentors in the edu-tech industry!
                    </p>
                    <p className="paragraph u-margin-top-small">
                        All this, while camping amidst some of the most beautiful sites in Hyderabad.
                    </p>
                    <Link to='/signin' className="btn-text">Sign Up &rarr;</Link>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={image1} alt="" className="composition__photo composition__photo--p1"/>
                        <img src={image3} alt="" className="composition__photo composition__photo--p2"/>
                        <img src={image2} alt="" className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
        </section>
    )
}