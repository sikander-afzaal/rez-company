import { useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="bg-white wrapper sticky z-50 top-0 left-0">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="md:hidden block fixed top-0 left-0 w-full h-full bg-black opacity-60 z-[90]"
        ></div>
      )}
      <div className="contain h-auto py-5 md:p-0 md:h-[123px] justify-between items-center">
        <img
          src="/logo.png"
          className="w-[100px] md:w-[120px] object-contain"
          alt=""
        />
        <nav
          className={`md:static z-[92] fixed top-0 w-full max-w-[450px] h-full md:w-auto md:max-w-none md:h-auto bg-white md:bg-transparent flex-col md:flex-row justify-start items-center sm:items-start px-[3rem] pt-[6rem] pb-[3rem] md:p-0 overflow-y-auto md:overflow-visible border-l-2 border-solid border-redOrange md:border-none flex md:justify-center md:items-center gap-8 md:gap-5 lg:gap-8 ${
            headerToggle ? "right-0" : "-right-[800px]"
          } transition-all duration-700`}
        >
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden block cursor-pointer absolute top-4 right-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-black font-commissioner text-lg md:text-base font-medium"
          >
            Home
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-black font-commissioner text-lg md:text-base font-medium"
          >
            About
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-black font-commissioner text-lg md:text-base font-medium"
          >
            Services
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="text-black font-commissioner text-lg md:text-base font-medium"
          >
            Contact us
          </a>
          <div className="flex md:hidden justify-center items-center gap-6">
            <a href="#" className="text-black font-medium text-base">
              Sign up
            </a>
            <button className="ctaBtn text-base py-2 lg:py-3 px-6 lg:px-10">
              Sign in
            </button>
          </div>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-6 h-6 md:hidden block  cursor-pointer"
          onClick={() => setHeaderToggle(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>

        <div className="hidden md:flex justify-center items-center gap-6">
          <a href="#" className="text-black font-medium text-base">
            Sign up
          </a>
          <button className="ctaBtn text-base py-2 lg:py-3 px-6 lg:px-10">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
