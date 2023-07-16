import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import hamMenu from "../assets/menu-hamburger-svgrepo-com.svg";
import CompanyLogo from "../assets/company-logo.jsx";

export default function Navbar() {
  const text = ["Projects", "Who are we ?", "Contact Us"];
  const [toggle, setToggle] = useState(false);

  function menuHandle() {
    setToggle(!toggle);
  }

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  let jsx_showMenulist = text.map((e) => {
    return (
      <a
        key={e}
        href="#"
        className="p-2 font-medium tracking-tight subpixel-antialiased text-sky-700 hover:underline underline-offset-4 decoration-2"
      >
        {e}
      </a>
    );
  });

  return (
    <>
      <div className="px-14 py-8 navbar bg-zinc-200 ">
        <div className="flex-1">
          <a href="#" className="text-zinc-600">
            <CompanyLogo />
          </a>
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
