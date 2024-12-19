import Contact from "../contact/Contact";

const ContactList = ({ contacts }) => {
	return (
		<ul>
			{contacts.map((item) => {
				return (
					<li key={item.id}>
						<Contact contactName={item.name} number={item.number} />
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
