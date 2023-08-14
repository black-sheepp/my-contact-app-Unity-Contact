import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import ContactList from "./Components/ContactList";
import FormContact from "./Components/FormContact";
import ViewContact from "./Components/ViewContact";
import EditContact from "./Components/EditContact";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path='/' element={<Nav />}>
						<Route path='/' element={<ContactList />} />
						<Route path='/add-contact' element={<FormContact />} />
						<Route path='/view-contact' element={<ViewContact />} />
						<Route path='/edit-contact' element={<EditContact />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
