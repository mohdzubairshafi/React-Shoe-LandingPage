import { useState } from "react";
import logo from "../images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import Cart from "./Cart";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <header className='relative flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto'>
        <div className='flex items-center justify-start gap-4'>
          <ul className='flex items-center justify-start gap-4'>
            {!isOpen && (
              <li onClick={() => setIsOpen(true)} className='sm:hidden'>
                <img src={menu} alt='' className='cursor-pointer' />
              </li>
            )}
            {isOpen && (
              <li onClick={() => setIsOpen(false)} className='lg:hidden absolute top-8 left-8 z-50'>
                <img src={close} alt='' className='cursor-pointer w-6' />
              </li>
            )}
            <li>
              <a href='/'>
                <img src={logo} alt='logo' />
              </a>
            </li>
          </ul>

          <nav
            className={`${
              isOpen &&
              " z-10  absolute top-0 left-0 bg-white h-[100vh] w-3/4 flex flex-col justify-center  items-center gap-5 shadow-2xl p-8 lg:shadow-none md:p-0"
            }`}
          >
            <ul className={`flex items-start flex-col gap-4  sm:flex-row  ${isOpen ? "flex" : "hidden sm:flex"} `}>
              <li>
                <a href='/'> Collections</a>
              </li>
              <li>
                <a href='/'> Men</a>
              </li>
              <li>
                <a href='/'> Women</a>
              </li>
              <li>
                <a href='/'> About</a>
              </li>
              <li>
                <a href='/'> Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <ul className='flex items-center justify-start gap-4'>
            <li>
              <button onClick={() => setCartIsOpen(!cartIsOpen)}>
                <AiOutlineShoppingCart className='text-2xl text-slate-600' />
              </button>
            </li>
            <li>{cartIsOpen && <Cart />}</li>
            <li>
              <img src={avatar} alt='' className='w-12' />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
