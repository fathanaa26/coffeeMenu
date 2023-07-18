import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import hamMenu from "../assets/menu-hamburger-svgrepo-com.svg";
import CompanyLogo from "../assets/company-logo.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const text = [
    {
      data: "Projects",
      path: "/projects",
    },
    {
      data: "Who are we ?",
      path: "/about",
    },
    {
      data: "Contact us",
      path: "/contactus",
    },
  ];
  const [toggle, setToggle] = useState(false);

  function menuHandle() {
    setToggle(!toggle);
  }

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  let jsx_showMenulist = text.map((e) => {
    return (
      <Link
        to={e.path}
        key={e.data}
        className="p-2 font-medium tracking-tight subpixel-antialiased text-sky-700 hover:underline underline-offset-4 decoration-2"
      >
        {e.data}
      </Link>
    );
  });

  return (
    <>
      <div className="px-14 py-8 navbar bg-zinc-200 ">
        <div className="flex-1">
          <Link to="/">
            <CompanyLogo />
          </Link>
        </div>
        <div className="flex-none">
          {isMobile && (
            <button onClick={menuHandle}>
              <img src={hamMenu} className="w-10 h-10" />
            </button>
          )}
          {!isMobile && jsx_showMenulist}
        </div>
      </div>
      <div className="bg-zinc-200 text-center flex flex-col">
        {toggle && jsx_showMenulist}
      </div>
    </>
  );
}
