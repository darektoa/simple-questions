import "./style.css";
import { joinClass } from "../../utilities/string-helper";
import { useEffect, useState } from "react";

const Toast = (props) => {
    const {children, className, show, value, ...attrs} = props;
    const [showMe, setShowMe] = useState(show);

    useEffect(() => setShowMe(show), [show]);

    return (
        <section {...attrs}
            className={joinClass('toast-component', className, showMe || 'toast-component--hide')}>
            { children || value}
        </section>
    );
}

export default Toast;