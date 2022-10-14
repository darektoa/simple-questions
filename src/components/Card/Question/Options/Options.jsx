import "./style.css";
import { addAnswer, removeAnswer } from "../../../../redux/question";
import { useDispatch } from "react-redux";
import CheckboxOptions from "../CheckboxOptions";
import RadioOptions from "../RadioOptions";

const Options = (props) => {
    const { className, data, ...attrs } = props;
    const dispatch = useDispatch();

    const optionClickHandler = (event) => {
        const payload = {
            id: data.id,
            answer_ids: [(event.target.value)]
        };

        if(event.target.checked) dispatch(addAnswer(payload));
        else dispatch(removeAnswer(payload));
    }
    
    return (data.type === 'multiple' ?
        <CheckboxOptions {...attrs}
            data={data}
            onClick={optionClickHandler}
        />:

        <RadioOptions {...attrs}
            data={data}
            onClick={optionClickHandler}
        />
    );
}

export default Options;