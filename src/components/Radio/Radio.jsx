import "./style.css";
import { joinClass } from "../../utilities/string-helper";

const Radio = (props) => {
    const { children, wrapperClassName, ...attrs } = props;

    return (
        <label className={joinClass("radio-component", wrapperClassName)}>
            <input type="radio" {...attrs} />
            { children }
        </label>
    );
}

export default Radio;