import "./style.css";
import { joinClass } from "../../../../utilities/string-helper";
import Checkbox from "../../../Checkbox";
import Text from "../../../Text";

const CheckboxOptions = (props) => {
    const { className, data, ...attrs } = props;

    return data.options.map(item => (
        <Checkbox {...attrs}
            className={"card-question-checkbox-component"}
            defaultChecked={ data.answer_ids?.includes(item.id.toString()) ? "checked" : "" }
            key={item.id}
            value={item.id}
            wrapperClassName={joinClass("mb-1 items-center", className)}>
                
            <Text className="ml-2">{item.label}</Text>
        </Checkbox>
    ));
}

export default CheckboxOptions;