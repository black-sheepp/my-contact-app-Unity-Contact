import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
	return (
		<div className='flex flex-col mt-6 '>
			<div className='flex justify-center m-2'>
				<div className='flex bg-[#000000] justify-center text-white text-2xl w-1/2  py-3 rounded-xl border-solid border-2 border-black'>
					<h2 className='font-bold text-white'>Contact List</h2>
				</div>
			</div>
			<div className='flex justify-center mb-1 mx-3'>
				<div className=' w-1/2 justify-between flex px-4 py-2 rounded-xl'>
					<p className='text-lg text-[#ff218c] font-bold w-1/4'>Shivam Kumar Gupta</p>
					<p className='text-lg text-[#d4e09b] w-1/5'>9845888500</p>
					<p className=' text-white w-1/4'>shivamguptanitw@gmail.com</p>
					<div className='flex justify-between'>
						<Link to={"/view-contact"}>
							<FontAwesomeIcon
								icon={faBookOpenReader}
								size='xl'
								style={{ color: "#80ed99" }}
								className='mx-2'
							/>
						</Link>
						<Link to={"/edit-contact"}>
							<FontAwesomeIcon
								icon={faFilePen}
								size='xl'
								style={{ color: "#ff6f59" }}
								className='mx-2'
							/>
						</Link>
						<Link>
							<FontAwesomeIcon
								icon={faTrash}
								size='xl'
								style={{ color: "#ff0054" }}
								className='mx-2'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactList;
