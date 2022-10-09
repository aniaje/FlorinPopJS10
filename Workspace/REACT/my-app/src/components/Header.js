import React from "react";
import Name from "./Name.js";
import Button from "./Button.js";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <>
      <Name />
      <row>
        <Button type="button" text="Email" />
        <Button type="button" text="LinkedIn" />
      </row>
    </>
  );
}

export default Header;
