import "./style.css";
import { joinClass } from "../../../utilities/string-helper";
import Card from "../Card";
import Options from "./Options";
import Text from "../../Text";

const Question = (props) => {
    const { className, data, ...attrs} = props;

    return (
        <Card {...attrs} className={joinClass('card-question-component', className)}>
            <Text className="card-question-component__question">
                {data.question}
            </Text>

            <Options data={data}
                name={`question-option-${data.id}`}
            />
        </Card>
    );
}

Question.defaultProps = {
    data: {
        options: []
    },
}

export default Question;