import React from "react";

import { FcList } from "react-icons/fc";
import { Link } from "react-router-dom";

const Headers = () => {
  const MenuItem = (
    <li className="flex gap-2">
      <Link to={"/"} className="btn btn-outline mx-1">
        {" "}
        Home{" "}
      </Link>
      <Link to={""} className="btn btn-outline mx-1">
        {" "}
        Log In{" "}
      </Link>
      <Link to={""} className="btn btn-outline mx-1">
        {" "}
        Sign In{" "}
      </Link>
      <Link to={""} className="btn btn-outline mx-1">
        {" "}
        About Us{" "}
      </Link>
    </li>
  );

  return (
    <div className="mx-auto p-1">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
           
              <h4 className="text-2xl">
                <FcList></FcList>
              </h4>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MenuItem}
            </ul>
          </div>
        </div>
        <div className="navbar-center mx-5">
          <h2 className="text-3xl font-extrabold"> SH Volunteer </h2>
        </div>
        <div className="navbar-end flex gap-5">
          <p> {MenuItem}</p>
        </div>
      </div>
    </div>
  );
};

export default Headers;
