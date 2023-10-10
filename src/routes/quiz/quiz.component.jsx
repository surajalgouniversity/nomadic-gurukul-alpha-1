import {Fragment, useState} from "react";
import {questions} from '../../questions.jsx'
import QuizList from "../../components/Quiz/QuizList.jsx";

export default function Quiz({email}) {
    const [cor, setCor] = useState(false)
    const handleClick = () => {
        setCor(true)
    }
    return (
        <Fragment>
            {!cor
                ? <a className="btn btn--white btn--animated" onClick={handleClick}>Play Quiz</a>
                :<QuizList questions={questions.questions}/>
            }

        </Fragment>
    )
}