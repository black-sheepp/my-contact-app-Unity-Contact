import React from "react";
import Logo from "./Logo";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<div className=' bg-[#000000] w-full h-16 pl-20 pr-20'>
				<Link to={"/"}>
					<Logo />
				</Link>
			</div>
			<div className='contact-app-header'>
				<div className='ml-60 mr-60 mt-4 flex justify-between'>
					<div>
						<p className='text-white text-5xl font-bold'>Stay</p>
						<p className='text-4xl font-bold text-[#7d2ae8]'>in touch</p>
					</div>
					<div>
						{/* <input type='text' placeholder='Search Contact...' className='search-input' />
						<button type='submit' className='search-btn'>
							Search
						</button> */}
					</div>
					<Link to={"/add-contact"} className='button'>
						Add Contact
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
};

export default Nav;
