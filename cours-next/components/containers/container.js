import React from "react";
import Navbar from "../navbars/Navbar";
export default function (props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
