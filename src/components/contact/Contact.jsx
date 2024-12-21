import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Contact = ({ contactName, number, id, onDeleteContact }) => {
	return (
		<>
			<FaUser />
			<p>{contactName}</p>
			<FaPhone />
			<p>{number}</p>
			<button type="button" onClick={() => onDeleteContact(id)}>
				Delete
			</button>
		</>
	);
};

export default Contact;
