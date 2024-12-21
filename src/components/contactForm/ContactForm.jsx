import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
	name: Yup.string().min(3).max(50).required(),
	number: Yup.string().min(3).max(50).required(),
});

const ContactForm = ({ onAddContact }) => {
	const initialValues = { name: "", number: "" };
	const handleSubmit = (values, actions) => {
		onAddContact(values);
		actions.resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={contactFormSchema}
		>
			<Form>
				<label>
					<span>Name</span>
					<Field type="text" name="name"></Field>
					<ErrorMessage name="name" component="span" />
				</label>
				<label>
					<span>Number</span>
					<Field type="text" name="number"></Field>
					<ErrorMessage name="number" component="span" />
				</label>
				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
