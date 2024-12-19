import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../searchBox/SearchBox";
import ContactList from "../contactList/ContactList";
import { useState } from "react";

const contacts = [
	{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
	{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
	{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
	{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
	const [searchValue, setSearchValue] = useState("");

	const searchContacts = contacts.filter((item) =>
		item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
	);

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox value={searchValue} onSearch={setSearchValue} />
			<ContactList contacts={searchContacts} />
		</>
	);
};

export default App;
