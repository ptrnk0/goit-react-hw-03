import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Contact = ({ contactName, number }) => {
	return (
		<>
			<FaUser />
			<p>{contactName}</p>
			<FaPhone />
			<p>{number}</p>
		</>
	);
};

export default Contact;
