import {Link} from "react-router-dom";
import image1 from "../../img/ng-1.png";
import image3 from "../../img/ng-3.png";
import image2 from "../../img/ng-2.png";

export default function QuizComp() {
    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Quiz your way in!
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Wondering how to get into Nomadic Gurukul? This is how.
                    </h3>
                    <p className="paragraph">
                        Every month, we have a marathon of daily quizzes that go live a couple of weeks ahead of Nomadic
                        Gurukul. This quiz is your key to getting shortlisted for the camp!
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        Who is this quiz for?
                    </h3>
                    <p className="paragraph">
                        This quiz is for anyone with basic exposure to the tech space. This means that anyone belonging
                        to the field of SWE, Data Science, AI, Testing, etc., is a great fit for this quiz.
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