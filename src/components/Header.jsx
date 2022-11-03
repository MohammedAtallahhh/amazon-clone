import Image from "next/image";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const HeaderClasses = {
  topNav:
    "h-[4.5rem] py-3 px-4 flex justify-between items-center gap-5 bg-blue-dark",
  searchBox: "h-full hidden sm:flex flex-grow align-center link",
  searchBoxInput: "p-2 h-full flex-grow flex-shrink rounded-l-md",
  searchBoxButton:
    "w-[3rem] h-full p-2 rounded-r-md bg-yellow-400 hover:bg-yellow-500 transition-all",

  actions:
    "action flex items-center gap-3 text-sm text-white text-center font- h-full",
  cartBadge:
    "absolute top-0 right-0 md:right-14 bg-yellow-500 w-5 h-5 flex justify-center items-center rounded-full",
};

const Header = () => {
  const {
    topNav,
    searchBox,
    searchBoxInput,
    searchBoxButton,
    actions,
    cartBadge,
  } = HeaderClasses;

  return (
    <>
      <header>
        {/*=================== Top Navbar =================*/}
        <div className={topNav}>
          {/* logo */}
          <div className="relative w-[9.5rem] h-[2.5rem] mt-2">
            <Image
              src="https://links.papareact.com/f90"
              layout="fill"
              alt="Amazon logo"
              objectFit="contain"
              className="link"
            />
          </div>

          {/* search box */}
          <div className={searchBox}>
            <input type="text" className={searchBoxInput} />
            <button className={searchBoxButton}>
              <MagnifyingGlassIcon className="w-full h-full" />
            </button>
          </div>

          {/* actions */}
          <div className={actions}>
            <div className="message link">
              <h2>Hello Mohammed Atallah</h2>
              <p className="font-extrabold md:text-sm">Accounts & lists</p>
            </div>

            <div className="returns link">
              <h3>Returns</h3>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div className="cart relative h-full link flex items-center gap-2">
              <span className={cartBadge}>3</span>
              <ShoppingCartIcon className="w-full h-full" />
              <p className="font-extrabold text-xs md:text-sm hidden md:inline">
                Basket:{" "}
              </p>
            </div>
          </div>
        </div>

        {/*====================== Bottom Navbar ===================*/}

        <div className="bottom h-[3rem] bg-blue-light text-white px-4 flex items-center gap-4">
          <div className="menuIcon h-full w-[3rem] flex items-center cursor-pointer">
            <Bars3Icon className="h-full w-full mr-1" />
            All
          </div>

          <span className="link text-[12px] md:text-[16px]">Prime videos</span>
          <span className="link text-[14px] md:text-[16px]">
            Amazon business
          </span>
          <span className="link text-[12px] md:text-[16px]">Today's deals</span>
          <span className="link text-[12px] md:text-[16px] hidden md:inline-flex">
            Electronics
          </span>
          <span className="link text-[12px] md:text-[16px] hidden md:inline-flex">
            Food & Grocery
          </span>
          <span className="link text-[12px] md:text-[16px] hidden md:inline-flex">
            Prime
          </span>
          <span className="link text-[12px] md:text-[16px] hidden md:inline-flex">
            Buy again
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
