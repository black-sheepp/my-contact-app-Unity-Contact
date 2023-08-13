import './App.css';
import CreateNewContactButton from './Components/CreateNewContactButton';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className='contact-app-header'>
      <Nav/>
      <div className='ml-60 mr-60 mt-4 flex justify-between'>
        <div>
        <p className='text-black text-5xl font-bold'>Stay</p>
        <p className='text-4xl font-bold text-[#7d2ae8]'>in touch</p>
        </div>
        <SearchBar/>
        <CreateNewContactButton/>
    </div>
    </div>
  );
}

export default App;
