import logo from './logo.svg';
import './App.css';
import {
  Navbar, NavbarBrand
} from 'reactstrap';

function App() {
  return (
    < div className = "App" >
      <Navbar color="dark" dark expand="md">
        <div className="container-fluid">
          <NavbarBrand href="/">
            Restaurant
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
