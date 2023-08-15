import React from "react";

const Loader = () => {
	return (
		<div className="flex justify-center">
			<div className='loader'>
				<div data-glitch='Loading...' className='glitch'>
					Loading...
				</div>
			</div>
		</div>
	);
};

export default Loader;
