import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactServices } from "../Services/ContactServices";
import Loader from "./Loader";

const ViewContact = () => {
	let { contactId } = useParams();

	let [state, setState] = useState({
		loading: false,
		contact: {},
		errorMessage: "",
	});

	async function fetchContact() {
		try {
			setState({ ...state, loading: true });
			let response = await ContactServices.getContact(contactId);
			setState({
				...state,
				loading: false,
				contact: response.data,
			});
		} catch (error) {
			setState({
				...state,
				loading: false,
				errorMessage: error.message,
			});
		}
	}

	useEffect(() => {
		fetchContact();
	}, [contactId]);

	let { loading, contact, errorMessage } = state;

	return loading ? (
		<Loader />
	) : (
		<div>
			<div className='contact'>
				<h2 className='h2'>
					Contact
					<br />
					Information
				</h2>
				<hr />
				<h3 className='h3'>
					{contact.address}
					<br />
				</h3>
				<p className='para'>
					<span className='prefix'>Name: </span>
					{contact.name}
					<br />
					<span className='prefix'>Phone: </span>
					{contact.phone}
					<br />
					<span className='prefix'>Gender: </span>
					{contact.gender}
					<br />
					<span className='prefix'>Group: </span>
					{contact.group}
					<br />
					<span className='prefix'>Social: </span>
					{contact.socialLink}
					<br />
					E-mail:
					<a className='email'>
						{contact.email}
					</a>
				</p>
				<Link to={`/edit-contact/${contact.id}`} className='button' style={{ background: "yellow", color: "black" }}>
					Edit Contact
				</Link>
			</div>
		</div>
	);
};

export default ViewContact;
