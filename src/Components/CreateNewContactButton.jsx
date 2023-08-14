import React from "react";
import { useState } from "react";
import FormContact from "./FormContact";

const CreateNewContactButton = () => {
	const [showComponent, setShowComponent] = useState(false);

	const handleButtonClick = () => {
		setShowComponent(true);
	};

	return (
		<div className=''>
			<button className='button' onClick={handleButtonClick}>
				Add Contact
			</button>

			<div className='w-full'>{showComponent && <FormContact />}</div>
		</div>
	);
};

export default CreateNewContactButton;
