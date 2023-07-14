import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import hamMenu from "../../assets/menu-hamburger-svgrepo-com.svg";

export default function Navbar() {
  const text = ["Jasa", "Kontak", "Tentang"];
  const [toggle, setToggle] = useState(false);

  function menuHandle() {
    setToggle(!toggle);
  }

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  let jsx_showMenulist = text.map((e) => {
    return (
      <a key={e} href="#" className="p-3">
        {e}
      </a>
    );
  });

  return (
    <>
      <div className="w-auto h-fit navbar bg-zinc-200 ">
        <div className="flex-1">
          <a href="#" className="text-zinc-600">
            CompanyLogo
          </a>
        </div>
        <div className="flex-none">
          {isMobile && 
            <button className="hover:bg-zinc-400" onClick={menuHandle}>
                <img src={hamMenu} className="w-10 h-10" />
            </button>
          }
          {!isMobile && jsx_showMenulist}
        </div>
      </div>
      <div className="bg-zinc-400 text-center flex flex-col">
        {toggle && jsx_showMenulist}
      </div>
    </>
  );
}
