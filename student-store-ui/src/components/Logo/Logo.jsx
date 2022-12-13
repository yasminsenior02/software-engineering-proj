import * as React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <div className="Logo">
      <li>
        <Link to="/">
          <img classname="img" src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" />
        </Link>
      </li>
    </div>
  );
}
