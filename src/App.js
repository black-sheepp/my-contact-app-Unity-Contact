import "./App.css";
import ContactList from "./Components/ContactList";
import CreateNewContactButton from "./Components/CreateNewContactButton";
import Nav from "./Components/Nav";
import SearchBar from "./Components/SearchBar";

function App() {
	return (
		<div>
			<div className='contact-app-header'>
				<Nav />
				<div className='ml-60 mr-60 mt-4 flex justify-between'>
					<div>
						<p className='text-black text-5xl font-bold'>Stay</p>
						<p className='text-4xl font-bold text-[#7d2ae8]'>in touch</p>
					</div>
					<SearchBar />
				</div>
				<ContactList/>
				<div className='ml-60'>
					<CreateNewContactButton />
				</div>
			</div>
		</div>
	);
}

export default App;
