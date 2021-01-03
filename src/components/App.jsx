import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function App() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <div className="container-fluid">
          <NavbarBrand href="/">My Kitchen </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
