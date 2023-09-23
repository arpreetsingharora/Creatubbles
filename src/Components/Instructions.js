import {useNavigate} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import "../CSS/Instructions.css"
import quizBack from '../Images/quiz.jpg'
import instruct from '../Images/instruct.jpg'

const Instructions = () => {

    const navigate = useNavigate();

    const instructionsList = ["There will be 10 second time for each question as depicted by bar in above picture " +
          "following which the question will be disabled and you wont be able to answer.", 
        "The question whill be multiple choice questions, where 4 options will be given."+
        "On selecting the option it will be highlighted yellow and after some pause correct and wrong"+
         "answer will be revealed and all options will be disabled.",
        "In order to proceed to next question you can press the next button."+
        "At the last page you will be presented with you result"]

        const navHomePage = () =>{

            navigate('/');
        }

    return (
            <div className="image-container-instruct">
                <img src={quizBack} alt="Your Image" className="instruct-background-image" />
                <div>
                    <img src={instruct} alt="None" className="instructImg" />
                </div>
                <div>
                    <ol className='orderedList'>
                     {instructionsList.map( (insItem, index) => (
                        <li key={index}>{index + 1}: {insItem}</li>
                     ))}
                    </ol>
                </div>
                <Button variant="primary" className='instruct-homeButton' size='md' onClick={navHomePage}>
                    Click to go back to Home Page
                </Button>
            </div>
    )
}

export default Instructions;