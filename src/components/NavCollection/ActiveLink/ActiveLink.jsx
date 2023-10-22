import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div className="pl-8 md:pl-0 border-b-[1px] border-b-emerald-700 dark:border-b-slate-600 md:border-0 ">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "my-text-primary hover:text-gray-300"
            : "my-text-primary hover:text-gray-300"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
