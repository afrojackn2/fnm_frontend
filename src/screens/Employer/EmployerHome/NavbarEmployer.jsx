import React, { useState } from "react";
import "../../../css/Employer/NavbarEmployer.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import EmployerHeader from "./EmployerHeader";
import NavbarEM from "./NavbarEM";

export default function NavbarEmployer() {
  const [hamberger, setHamberger] = useState(false);
  const toggle = () => setHamberger(!hamberger);

  return (
    <div>
      <div className="Navbar_section">
        <NavbarEM/>
        <EmployerHeader/>
      </div>
    </div>
  );
}
