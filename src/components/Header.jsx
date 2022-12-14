import { useDispatch } from "react-redux";
import { logout } from "../redux/features/userSlice";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const links = (
    <ul className="flex flex-row items-center gap-x-8 text-sm">
      <li
        className={"cursor-pointer"}
        onClick={() =>
          window.open("https://github.com/kaungmyathein12/MERN-NoteAPP")
        }
      >
        Source Code
      </li>
      <li
        className="text-neutral-500 hover:text-neutral-300 transition-all font-medium cursor-pointer"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </li>
    </ul>
  );

  return (
    <header className="py-6">
      <nav className="w-11/12 lg:w-4/5 xl:w-3/4 flex flex-row justify-between items-center mx-auto">
        <div className={"flex flex-row items-center"}>
          <i className="ri-bookmark-fill text-xl text-blue-600 mr-2"></i>
          <Link to="/">
            <h3 className="font-bold text-xl text-emerald-500">CRUDWEB</h3>
          </Link>
        </div>
        {links}
      </nav>
    </header>
  );
};

export default Header;
