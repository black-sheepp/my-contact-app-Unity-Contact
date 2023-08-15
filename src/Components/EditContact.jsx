import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ContactServices } from "../Services/ContactServices";
import Loader from "./Loader";

const EditContact = () => {
	let navigate = useNavigate();
	let { contactId } = useParams();

	let [state, setState] = useState({
		loading: false,
		contact: {
			name: "",
			phone: "",
			email: "",
			gender: "",
			group: "",
			address: "",
			socialLink: "",
		},
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

	let updateInput = (event) => {
		setState({
			...state,
			contact: {
				...state.contact,
				[event.target.name]: event.target.value,
			},
		});
	};

	let submitUpdateContact = async (event) => {
		event.preventDefault();

		try {
			let response = await ContactServices.updateContact(state.contact, contactId);
			if (response) {
				navigate("/", { replace: true });
			}
		} catch (error) {
			setState({
				...state,
				loading: false,
				errorMessage: error.message,
			});
			navigate(`/edit-contact/${contactId}`, { replace: false });
		}
	};

	let { loading, contact, errorMessage } = state;

	return loading ? (
		<Loader />
	) : (
		<div>
			<div>
				<div className='flex justify-center mt-16'>
					<div className='flex flex-col w-1/2 bg-[#48e5c2] rounded-2xl p-5'>
						<div className='flex justify-center'>
							<h3 className='text-lg font-bold mb-6 h2'>Edit Contact</h3>
						</div>
						<form onSubmit={submitUpdateContact} className='flex flex-col'>
							<div className="flex">
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
										value={contact.name}
										name='name'
										onChange={updateInput}
									/>
									<input
										className='bg-[#48e5c2] w-96 text-[#00000]'
										type='number'
										value={contact.phone}
										name='phone'
										onChange={updateInput}
									/>
									<input
										className='bg-[#48e5c2] w-96 text-[#00000]'
										type='email'
										value={contact.email}
										name='email'
										onChange={updateInput}
									/>
									<select
										className='bg-[#48e5c2] w-96 text-[#00000]'
										type='text'
										value={contact.gender}
										name='gender'
										onChange={updateInput}>
										<option value=''>Select Gender</option>
										<option value='Male'>Male</option>
										<option value='Female'>Female</option>
									</select>
									<select
										className='bg-[#48e5c2] w-96 text-[#00000]'
										type='text'
										value={contact.group}
										name='group'
										onChange={updateInput}>
										<option value=''>Select Group</option>
										<option value='Office'>Office</option>
										<option value='Family'>Family</option>
										<option value='Colleague'>Colleague</option>
										<option value='Friend'>Friend</option>
									</select>
									<input
										className='bg-[#48e5c2] w-96 text-[#00000]'
										type='text'
										value={contact.address}
										name='address'
										onChange={updateInput}
									/>
									<input
										className='bg-[#48e5c2] w-96 text-[#00000]'
										type='text'
										value={contact.socialLink}
										name='socialLink'
										onChange={updateInput}
									/>
								</div>
							</div>
							<div className='flex justify-center'>
								<button
									type='submit'
									className='button'
									style={{ width: "100px", background: "#3772ff" }}>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditContact;
