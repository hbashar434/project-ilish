import React from "react";
import ActiveLink from "../../NavCollection/ActiveLink/ActiveLink";

const navList = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Products",
    to: "/products",
  },
  {
    label: "Contact",
    to: "/",
  },
  {
    label: "About",
    to: "/",
  },
  {
    label: "Blog",
    to: "/",
  },
];

const NavItems = () => {
  return (
    <div className="container mx-auto text-center">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4 text-start md:justify-center text-lg">
        {navList.map((item, index) => (
          <ActiveLink to={item.to} key={index}>
            {item.label}
          </ActiveLink>
        ))}
      </div>
    </div>
  );
};

export default NavItems;
