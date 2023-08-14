import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import ContactList from "./Components/ContactList";
import FormContact from "./Components/FormContact";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Nav />}>
						<Route path='/contactlist' element={<ContactList />} />
						<Route path='/add-contact' element={<FormContact />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
