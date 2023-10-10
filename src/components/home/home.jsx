import {Fragment} from "react";
import Header from "./header.jsx";
import About from "./about.jsx";
import Schedule from "./schedule.jsx";
import Video from "./video.jsx";
import Mentor from "./mentor.jsx";
import QuizComp from "./Quizin.jsx";
import Footer from "./footer.jsx";

function HomePage() {
    return (
        <Fragment>
            <Header/>
            <main>
                <About/>
                <Video/>
                <Schedule/>
                <Mentor/>
                <QuizComp/>
                <Footer/>
            </main>
        </Fragment>
    )
}

export default HomePage;