import React from "react";
import { CDBNavbar, CDBInput } from "cdbreact";
import './Navbar.css'
import { Header } from "./Navbar.style";

const Navbar = () => {

	return (
        <Header style={{background:"#343e35", color:"#fff"}}>
          <CDBNavbar dark expand="md" scrolling className="justify-content-start">
            {/* <CDBInput type="search" size="md" hint="Search" className="mb-n4 mt-n3 input-nav"/> */}
            <div className="ml-auto">
              <i className="fas fa-bell"></i>
              <i className="fas fa-comment-alt mx-4"></i>
              <img alt="panelImage" src={icons} style={{width:"1.8rem",height:"1.8rem"}}/>
            </div>
          </CDBNavbar>
        </Header>
	);
}

export default Navbar;