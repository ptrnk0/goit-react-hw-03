import ContactForm from "../contactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import { useEffect, useState } from "react";
import initialContacts from "../../contacts.json";
import { nanoid } from "nanoid";

const App = () => {
	const [searchValue, setSearchValue] = useState("");
	const [contacts, setContacts] = useState(() => {
		const lsContacts = window.localStorage.getItem("contacts");

		if (lsContacts) {
			return JSON.parse(lsContacts);
		}

		return initialContacts;
	});

	useEffect(() => {
		window.localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const searchContacts = contacts.filter((item) =>
		item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
	);

	const handleAddContact = (contact) => {
		contact.id = nanoid();
		setContacts((prev) => {
			return [...prev, contact];
		});
	};

	const handleDeleteContact = (contactId) => {
		setContacts((prev) => {
			return prev.filter((contact) => contact.id !== contactId);
		});
	};

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm onAddContact={handleAddContact} />
			<SearchBox value={searchValue} onSearch={setSearchValue} />
			<ContactList
				contacts={searchContacts}
				onDeleteContact={handleDeleteContact}
			/>
		</>
	);
};

export default App;
