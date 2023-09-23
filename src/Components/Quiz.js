import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import AnswerTimer from "./AnswerTimer.js"
import quizBack from '../Images/quiz.jpg';
import '../CSS/Quiz.css';

const Quiz = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const quizQues = location.state;

  const [currentQuestion, updateCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState();
  const [score, setScore] = useState(0);
  const [disableOption, setDisableOption] = useState(false)
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);
  const [optionSelectStage, setoptionSelectStage] = useState(false);
  const [clickecOption, setClickedOption] = useState();
  const [buttondisableOption, setbuttondisableOption] = useState(true);

  const { question, options, answer, imageUrl } = quizQues[currentQuestion];
  const quesAnswer = options[answer];
  const totalQuestions = quizQues.length;

  const onOptionSelect = (option) => {
    if (selectedOption === option && selectedOption === quesAnswer) return 'success';
    else if (selectedOption === option && selectedOption !== quesAnswer) return 'danger';
    else if (option === quesAnswer) return 'success';
  };

  const onOptionClick = (option) => {
    setSelectedOption(option);
    setDisableOption(true);
    setbuttondisableOption(false);
    setShowAnswerTimer(false)
    if (option === quesAnswer) setScore(score + 1);
  };

  const onClickNext = () => {
    console.log(currentQuestion);
    setShowAnswerTimer(false);
    if (currentQuestion > 1) {
      navigate('/Result', { state: { totalQues: totalQuestions, correctAnswers: score } });
    } else {
      updateCurrentQuestion(currentQuestion + 1);
      setSelectedOption();
      setDisableOption(false);
      setbuttondisableOption(true);
      setTimeout(() => {
      setShowAnswerTimer(true);
      });
    }
  };

  const onTimeUp = (option) => {
    console.log(option);
    setDisableOption(true);
    onOptionClick(option);
    setbuttondisableOption(false);
  };

  const setOptionStage = (option) => {
    setClickedOption(option);
    setoptionSelectStage(true);
  }

  const selectVariant = (option) => {

    const variant = selectedOption == "" || selectedOption == null ? optionSelectStage && clickecOption == option ? "warning" : "primary" : onOptionSelect(option);
    return variant;
  }

  return (
    <div className="image-container">
      <img src={quizBack} alt="Your Image" className="background-image" />
      <div className="quizContainer">
        <div>
        <div className="quesImg-container">
          <img src={imageUrl} alt="None" className="quesImg" />
        </div>
          <div className='timer'>
            {showAnswerTimer && (
              <AnswerTimer duration={10} onTimeUp={onTimeUp} ansOption=""/>
            )}
          </div>
          <div className="question-text">{question}</div>
          <div className="options">
            {options.map((option, index) => (
              <Button
                variant={selectVariant(option)}
                className={`singleOption`}
                onClick={() => { setOptionStage(option); setTimeout(()=>{onOptionClick(option)}, 3000) }}
                key={option}
                disabled={disableOption}
              >
                {option}
              </Button>
            ))}
          </div>
          <br></br>
          <div className="controls">
            <Button
              variant="primary"
              size="lg"
              onClick={onClickNext}
              disabled={buttondisableOption}
            >
              {currentQuestion > 1 ? 'Submit' : 'Next Question'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
