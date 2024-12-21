import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ contactName, number, id, onDeleteContact }) => {
	return (
		<div>
			<FaUser />
			<p>{contactName}</p>
			<FaPhone />
			<p>{number}</p>
			<button type="button" onClick={() => onDeleteContact(id)}>
				Delete
			</button>
		</div>
	);
};

export default Contact;
