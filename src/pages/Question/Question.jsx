import "./style.css";
import { next, prev } from "../../redux/question";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Text from "../../components/Text";
import Toast from "../../components/Toast/Toast";
import { useEffect } from "react";

const Question = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [requiredWarn, setRequiredWarn] = useState(false);
    const {
        current,
        currentIndex,
        lastIndex,
        data,
    } = useSelector(state => state.question);

    const requiredWarnToast = (duration=2000) => {
        setRequiredWarn(true);
        setTimeout(() => setRequiredWarn(false), duration);
    }
    
    const prevClickHandler = () => dispatch(prev());
    const nextClickHandler = () => current.answer_ids?.length ? dispatch(next()) : requiredWarnToast();
    const finishClickHandler = () => current.answer_ids?.length ?navigate('/finish') : requiredWarnToast();

    return(
        <section className="question-page">
            <Toast show={requiredWarn} className="flex items-center bg-red-500">
                <Text className="font-medium text-sm text-white">Pertanyaan ini wajib dijawab</Text>
            </Toast>

            <Card className="w-full mb-4 flex flex-col border-t-4 border-t-sky-700">
                <Text className="mb-1 font-bold text-2xl">DEVELOPER TEST QUESTIONS</Text>
                <Text className="text-sm text-slate-500">Simple questionnaire with React.Js</Text>
            </Card>

            <Card.Question data={current}
                className="w-full max-w-lg mb-4 flex flex-col"
                disabled={currentIndex < lastIndex}
            />

            <div className="w-full mb-6 flex justify-end">
                {   
                    currentIndex ?
                    <Button onClick={prevClickHandler}
                        className="mr-4">
                        Back
                    </Button> :
                    null
                }

                {
                    currentIndex === data.length-1 ?
                    <Button onClick={finishClickHandler}
                        className="bg-sky-700 text-white">
                        Finish
                    </Button> :
                    <Button onClick={nextClickHandler}
                        className="bg-sky-700 text-white">
                        Next
                    </Button>
                }

            </div>
        </section>
    )
}

export default Question;