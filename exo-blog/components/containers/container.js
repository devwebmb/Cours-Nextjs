import React from "react";
import Navbar from "../navbars/Navbar";
export default function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}
