import "./style.css";
import { joinClass } from "../../utilities/string-helper";

const Card = (props) => {
	const { children, className, disabled, ...attrs } = props;

	return (
		<div {...attrs}
			className={joinClass('card-component', className, disabled&&'card-component--disabled')}>
			{children}
		</div>
	);
}

export default Card;