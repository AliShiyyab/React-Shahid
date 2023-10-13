import React, {useState} from 'react';
import {Button, ContactForm, FormGroup, Input, Label, PageWrapper, TextArea} from "../components/styles";

const initialState = {
	name: "",
	email: "",
	message: ""
};

const initialErrorState = {
	name: "",
	email: "",
	message: ""
};

const Contact = () => {
	const [contactInfoDetails, setContactInfoDetails] = useState(initialState);
	const [errorIfEmptyField, setErrorIfEmptyField] = useState(initialErrorState);

	const isValidEmail = (email) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	}


	const handleChangeValue = (e) => {
		const {name, value} = e.target;
		setContactInfoDetails((prev) => ({
			...prev,
			[name]: value
		}))
		setErrorIfEmptyField((prev) => ({
			...prev,
			[name]: ""
		}))
	}

	const validateForm = (e) => {
		e.preventDefault();
		let counter = 0;
		if (!contactInfoDetails.email || !isValidEmail(contactInfoDetails.email)) {
			counter += 1;
			setErrorIfEmptyField((prev) => ({
				...prev,
				email: !contactInfoDetails.email ? "Email is Required" : "Wrong Email Format"
			}))
		}
		if (!contactInfoDetails.name) {
			counter += 1;
			setErrorIfEmptyField((prev) => ({
				...prev,
				name: `Your Name is required`
			}))
		}
		if (counter === 0) {
			alert("Message Sent Successfully")
		}
	}
	return (
		<PageWrapper>
			<h1>Contact Us</h1>
			<ContactForm>
				<FormGroup>
					<Label>Name:</Label>
					<Input type="text" name={"name"} value={contactInfoDetails.name} placeholder={'Full Name: '}
					       onChange={handleChangeValue}/>
					{errorIfEmptyField && errorIfEmptyField.name && (
						<p style={{fontSize: "14px", color: "red", textAlign: "start", width: "100%"}}>
							{errorIfEmptyField.name}
						</p>
					)}
				</FormGroup>
				<FormGroup>
					<Label>Email:</Label>
					<Input type="email" name={'email'} value={contactInfoDetails.email} onChange={handleChangeValue}
					       placeholder={'exmaple@shahid.com'}/>
					{errorIfEmptyField && errorIfEmptyField.email && (
						<p style={{fontSize: "14px", color: "red", textAlign: "start", width: "100%"}}>
							{errorIfEmptyField.email}
						</p>
					)}
				</FormGroup>
				<FormGroup>
					<Label>Message:</Label>
					<TextArea rows="4" value={contactInfoDetails.message} name={"message"}
					          onChange={handleChangeValue}
					          placeholder={'This message for you, I can use formik and yup library to do a validation but i make a validation man¬ually.'}/>
				</FormGroup>
				<Button type="submit" onClick={validateForm}>Submit</Button>
			</ContactForm>
		</PageWrapper>
	);
};

export default Contact;
