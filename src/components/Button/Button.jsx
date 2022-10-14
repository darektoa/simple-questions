import "./style.css";
import { joinClass } from "../../utilities/string-helper";

const Button = (props) => {
    const {children, className, value, ...attrs} = props;

    return (
        <button {...attrs}
            className={joinClass('button-component', className)}>
            {children || value}
        </button>
    );
}

export default Button;