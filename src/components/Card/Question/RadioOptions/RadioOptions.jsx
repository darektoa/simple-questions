import "./style.css";
import { joinClass } from "../../../../utilities/string-helper";
import Radio from "../../../Radio";
import Text from "../../../Text";

const RadioOptions = (props) => {
    const { className, data, ...attrs } = props;

    return data.options.map(item => (
        <Radio {...attrs}
            className={"card-question-radio-component"}
            defaultChecked={ data.answer_ids?.includes(item.id.toString()) ? "checked" : "" }
            key={item.id}
            value={item.id}
            wrapperClassName={joinClass("mb-1 items-center", className)}>
                
            <Text className="ml-2">{item.label}</Text>
        </Radio>
    )); 
}

export default RadioOptions;