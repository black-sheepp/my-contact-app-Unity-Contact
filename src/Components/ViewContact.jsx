import React from "react";
import { Link } from "react-router-dom";

const ViewContact = () => {
	return (
		<div>
			<div className='contact'>
				<h2 className="h2">
					Contact
					<br />
					Information
				</h2>
				<hr />
				<h3 className="h3">
					1234 Main Street,
					<br />
					New York, NY 10022
				</h3>
				<p className="para">
					<span className='prefix'>Office: </span>
					1 800 987 4567
					<br />
					<span className='prefix'>Cell: </span>
					1 800 123 6578
					<br />
					<span className='prefix'>FAX: </span>
					1 800 321 4567
					<br />
					E-mail:
					<a className='email' href='mailto:#'>
						mail@email.com
					</a>
				</p>
            <Link to={'/edit-contact'} className="button" style={{background:"yellow",color:"black"}}>
                Edit Contact
            </Link>
			</div>
		</div>
	);
};

export default ViewContact;
