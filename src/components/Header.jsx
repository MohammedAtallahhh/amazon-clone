import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const HeaderClasses = {
  topNav:
    "h-[4.5rem] py-3 px-4 flex justify-between items-center gap-5 bg-blue-dark",
  logo: "relative w-[9.5rem] h-[2.5rem] mt-2",

  searchBox: "h-[80%] hidden sm:flex flex-grow align-center link",

  searchBoxInput:
    "p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-1 focus:outline-gray-200",

  searchBoxButton:
    "w-[3rem] h-full p-2 rounded-r-md bg-yellow-400 hover:bg-yellow-500 transition-all",

  actions:
    "action flex items-center gap-3 text-sm text-white text-center font- h-full",
  cartBadge:
    "absolute top-0 right-0 md:right-14 bg-yellow-500 w-5 h-5 flex justify-center items-center rounded-full",

  bottomNav: "h-[3rem] bg-blue-light text-white px-4 flex items-center gap-4",
  menuIcon: "h-full w-[3rem] flex items-center cursor-pointer",

  bottomNavLink: "link text-[12px] md:text-[16px]",
};

const Header = () => {
  const {
    topNav,
    logo,
    searchBox,
    searchBoxInput,
    searchBoxButton,
    actions,
    cartBadge,

    bottomNav,
    menuIcon,
    bottomNavLink,
  } = HeaderClasses;

  // Authentication session
  const session = useSession();

  return (
    <>
      <header>
        {/*=================== Top Navbar =================*/}
        <div className={topNav}>
          {/* logo */}
          <Link href="/">
            <div className={logo}>
              <Image
                src="https://links.papareact.com/f90"
                layout="fill"
                alt="Amazon logo"
                objectFit="contain"
                className="link"
              />
            </div>
          </Link>

          {/* search box */}
          <div className={searchBox}>
            <input type="text" className={searchBoxInput} />
            <button className={searchBoxButton}>
              <MagnifyingGlassIcon className="w-full h-full" />
            </button>
          </div>

          {/* actions */}

          {session.data ? (
            <div className={actions}>
              <div className="message link" onClick={signOut}>
                <h2 className="text-[12px] lg:text-sm">
                  Hello {session?.data?.user?.name}
                </h2>
                <p className="font-extrabold text-[12px] lg:text-sm">
                  Accounts & lists
                </p>
              </div>

              <div className="link">
                <h3 className="text-sm">Returns</h3>
                <p className="font-extrabold text-[12px] lg:text-sm">
                  & Orders
                </p>
              </div>

              <Link href="/checkout">
                <div className="relative h-full link flex items-center gap-2">
                  <span className={cartBadge}>3</span>
                  <ShoppingCartIcon className="w-full h-full" />
                  <p className="font-extrabold text-xs lg:text-sm hidden md:inline">
                    Basket:
                  </p>
                </div>
              </Link>
            </div>
          ) : (
            <button className="text-lg text-white px-4" onClick={signIn}>
              Sign in
            </button>
          )}
        </div>

        {/*====================== Bottom Navbar ===================*/}

        <div className={bottomNav}>
          <div className={menuIcon}>
            <Bars3Icon className="h-full w-full mr-1" />
            All
          </div>

          <span className={bottomNavLink}>Prime videos</span>
          <span className={bottomNavLink}>Amazon business</span>
          <span className={bottomNavLink}>Today's deals</span>
          <span className={`${bottomNavLink} hidden md:inline-flex`}>
            Electronics
          </span>
          <span className={`${bottomNavLink} hidden md:inline-flex`}>
            Food & Grocery
          </span>
          <span className={`${bottomNavLink} hidden md:inline-flex`}>
            Prime
          </span>
          <span className={`${bottomNavLink} hidden md:inline-flex`}>
            Buy again
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
