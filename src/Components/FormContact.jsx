import React, { useState  } from "react";
import Logo from "./Logo";
import { ContactServices } from "../Services/ContactServices";
import { useNavigate } from "react-router-dom";

const FormContact = () => {

	let navigate = useNavigate();

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

	let updateInput = (event) => {
		setState({
			...state,
			contact: {
				...state.contact,
				[event.target.name]: event.target.value,
			},
		});
	};

	let submitForm = async (event) => {
		event.preventDefault();
		try{
			let response = await ContactServices.createNewContact(state.contact); 
			if(response){
				navigate('/',{replace: true});
			}
		}catch(error){
			setState({
				...state,
				loading: false,
				errorMessage: error.message,
			});
			navigate('/add-contact',{replace: false})
		}
	}

	let { loading, contact, errorMessage } = state;

	return (
		<div className='contact-comp'>
			<div className='flex justify-center w-full contact-form'>
				<div className='w-1/3'>
					<form onSubmit={submitForm} className='form_container'>
						<div className='logo_container'>
							<Logo />
						</div>
						<div className='title_container'>
							<p className='title'>Add New Contact</p>
						</div>
						<br />
						<div className='input_container'>
							<label className='input_label' htmlFor='name_field'>
								Name
							</label>
							<input
								placeholder='Will Smith'
								title='Inpit title'
								name='name'
								value={contact.name}
								required={true}
								onChange={updateInput}
								type='text'
								className='input_field'
								id='name_field'
							/>
						</div>
						<div className='input_container'>
							<label className='input_label' htmlFor='phone_field'>
								Contact No.
							</label>
							<input
								placeholder='9845660000'
								title='Inpit title'
								name='phone'
								value={contact.phone}
								required={true}
								onChange={updateInput}
								type='number'
								className='input_field'
								id='phone_field'
							/>
						</div>
						<div className='input_container'>
							<label className='input_label' htmlFor='email_field'>
								Email
							</label>
							<input
								placeholder='WillSmith@abc.com'
								title='Inpit title'
								name='email'
								value={contact.email}
								required={true}
								onChange={updateInput}
								type='email'
								className='input_field'
								id='email_field'
							/>
						</div>
						<div className='input_container'>
							<label className='input_label' htmlFor='gender_field'>
								Gender
							</label>
							<select
								id='gender_field'
								className='input_field'
								name='gender'
								value={contact.gender}
								required={true}
								onChange={updateInput}>
								<option value='Male'>Male</option>
								<option value='Female'>Female</option>
							</select>
						</div>
						<div className='input_container'>
							<label className='input_label' htmlFor='category_field'>
								Groups or Category
							</label>
							<select id='category_field' className='input_field'
							name='group'
							value={contact.group}
							required={true}
							onChange={updateInput}>
								<option value='Office'>Office</option>
								<option value='Family'>Family</option>
								<option value='Collegue'>Collegue</option>
								<option value='Friend'>Friend</option>
							</select>
						</div>
						<div className='input_container'>
							<label className='input_label' htmlFor='address_field'>
								Address
							</label>
							<input
								placeholder='New York'
								title='Inpit title'
								name='address'
								value={contact.address}
								required={true}
								onChange={updateInput}
								type='text'
								className='input_field'
								id='address_field'
							/>
						</div>
						<div className='input_container'>
							<label className='input_label' htmlFor='socialmedia_field'>
								Social Media
							</label>
							<input
								placeholder='www.instagram.com/WillSmith'
								title='Inpit title'
								name='socialLink'
								value={contact.socialLink}
								required={true}
								onChange={updateInput}
								type='text'
								className='input_field'
								id='socialmedia_field'
							/>
						</div>

						<button title='Sign In' type='submit' className='sign-in_btn'>
							<span>Add Contact</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormContact;
