import "./style.css";
import { joinClass } from "../../utilities/string-helper";

const Checkbox = (props) => {
    const { children, wrapperClassName, ...attrs } = props;

    return (
        <label className={joinClass("checkbox-component", wrapperClassName)}>
            <input {...attrs} type="checkbox" />
            { children }
        </label>
    );
}

export default Checkbox;