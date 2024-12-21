import Contact from "../contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
	return (
		<ul>
			{contacts.map((item) => {
				return (
					<li key={item.id}>
						<Contact
							contactName={item.name}
							number={item.number}
							id={item.id}
							onDeleteContact={onDeleteContact}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
