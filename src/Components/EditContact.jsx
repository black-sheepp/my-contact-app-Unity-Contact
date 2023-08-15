import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactServices } from "../Services/ContactServices";
import Loader from "./Loader";

const EditContact = () => {
	let { contactId } = useParams();

	let [state, setState] = useState({
		loading: false,
		contact: {},
		errorMessage: "",
	});

	async function fetchContact() {
		try {
			setState({ ...state, loading: true });
			let response = await ContactServices.getContactEdit(contactId);
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

	return (
		<div>
			<div>
				<div className='flex justify-center mt-16'>
					<div className='flex flex-col w-1/2 bg-[#48e5c2] rounded-2xl p-5'>
						<div className='flex justify-center'>
							<h3 className='text-lg font-bold mb-6 h2'>Edit Contact</h3>
						</div>
						<div className='flex'>
							<div className='mr-12 ml-12 text-end text-lg font-semibold text-[#000814]'>
								<p>Name: </p>
								<p>Phone Number: </p>
								<p>Email Address: </p>
								<p>Gender: </p>
								<p>Groups or Categories: </p>
								<p>Address: </p>
								<p>Social Media : </p>
							</div>
							<div className=' text-lg flex flex-col'>
								<input
									className='bg-[#48e5c2] w-96 text-[#00000]'
									type='text'
									placeholder={contact.name}
								/>
								<input
									className='bg-[#48e5c2] w-96 text-[#00000]'
									type='number'
									placeholder={contact.phone}
								/>
								<input
									className='bg-[#48e5c2] w-96 text-[#00000]'
									type='email'
									placeholder={contact.email}
								/>
								<input
									className='bg-[#48e5c2] w-96 text-[#00000]'
									type='text'
									placeholder={contact.gender}
								/>
								<input
									className='bg-[#48e5c2] w-96 text-[#00000]'
									type='text'
									placeholder={contact.group}
								/>
								<input
									className='bg-[#48e5c2] w-96 text-[#00000]'
									type='text'
									placeholder={contact.address}
								/>
								<input
									className='bg-[#48e5c2] w-96 text-[#00000]'
									type='text'
									placeholder={contact.socialLink}
								/>
							</div>
						</div>
						<div className='flex justify-center'>
							<button className='button' style={{ width: "100px", background: "#3772ff" }}>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditContact;
