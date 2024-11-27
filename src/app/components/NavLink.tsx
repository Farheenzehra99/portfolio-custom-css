import Link from "next/link";
import React from "react";
import { NavLinkProps } from "../../../type/componentsTypes";

const NavLink: React.FC<NavLinkProps> = ({href, title, isFooter}) => {
  return (
    <Link href={href} className={`block py-2 pl-3 pr-4 scroll-m-1 text-xl rounded md:p-0 ${isFooter? "text-white hover:text-black": "text-[#ADB7BE]  hover:text-pink-600"}`}>
        {title}
    </Link>
  );
};

export default NavLink;