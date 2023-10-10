import {Fragment, useEffect} from "react";
import {useState} from "react";
import {resultInitialState} from '../../constants.js'
import './quiz.scss'
import AnswerTimer from "./AnswerTimer/AnswerTimer.jsx";

export default function QuizList({questions}) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answerIdx, setAnswerIdx] = useState(null)
    const [answer2, setAnswer2] = useState(null)
    const [result, setResult] = useState(resultInitialState)
    const [showResult, setShowResult] = useState(false)
    const [showAnswerTimer, setShowAnswerTimer] = useState(true)


    //Check if questions is not undefined and has at least one question
    if (questions && questions.length > 0) {
        const {id, question, A, B, C, D, answer, timer} = questions[currentQuestion]
        const options = [A, B, C, D]
        const onAnswerClick = (answer1, index) => {
            setAnswerIdx(index)
            if (answer1 === eval(answer)) {
                setAnswer2(true)
            } else {
                setAnswer2(false)
            }
        }
        const onClickNext = (finalAnswer) => {
            setAnswerIdx(null)
            setShowAnswerTimer(false)
            setResult((prev) =>
                finalAnswer
                    ? {
                        ...prev,
                        score: prev.score + 5,
                        correctAnswers: prev.correctAnswers + 1
                    } : {
                        ...prev,
                        wrongAnswers: prev.wrongAnswers + 1
                    }
            )
            if (currentQuestion !== questions.length - 1) {
                setCurrentQuestion((prev) => prev + 1)
            } else {
                setCurrentQuestion(0)
                setShowResult(true)
            }

            setTimeout(() => {
                setShowAnswerTimer(true)
            })
        }

        const onTryAgain = () => {
            setResult(resultInitialState)
            setShowResult(false)
            setCurrentQuestion(0)
        }

        const handleTimeUp = () => {
            if (answer2) {
                onClickNext(answer2)
            } else {
                setAnswer2(false)
                onClickNext(false)
            }
        }

        useEffect(() => {
            localStorage.setItem("score", result.score);
        }, [showResult])

        return (
            <div className="quiz-parent">
                <div className="quiz-container">
                    {!showResult ? (<>
                        {showAnswerTimer && (<AnswerTimer duration={timer} onTimeUp={handleTimeUp}/>)}
                        <span className="active-question-no">{currentQuestion + 1}</span>
                        <span className="total-question-no">/{questions.length}</span>
                        <h2>{question}</h2>
                        <ul>
                            {options.map((answer1, index) => (
                                <li
                                    onClick={() => onAnswerClick(answer1, index)}
                                    key={index}
                                    className={answerIdx === index ? 'selected-answer' : ''}
                                >
                                    {answer1}
                                </li>
                            ))}
                        </ul>
                        {/*<div className="footer">*/}
                        {/*    <button onClick={() => onClickNext(answer2)} disabled={answerIdx === null}>*/}
                        {/*        {currentQuestion === questions.length - 1 ? "Finish" : "Next"}*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </>) : <div className="results">
                        <h3>Results</h3>
                        <p>
                            Total Questions: <span>{questions.length}</span>
                        </p>
                        <p>
                            Total Score: <span>{result.score}</span>
                        </p>
                        <p>
                            Correct Answers: <span>{result.correctAnswers}</span>
                        </p>
                        <p>
                            Wrong Answers: <span>{result.wrongAnswers}</span>
                        </p>
                        <button onClick={onTryAgain}>Try Again</button>
                    </div>}

                </div>
            </div>
        )
    } else {
        // Render a loading message or some other placeholder if questions is not ready
        return <div>Loading...</div>
    }
}