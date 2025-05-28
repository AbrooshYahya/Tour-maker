import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Container with max width and rounded corners */}
      <div className="w-full max-w-7xl bg-[#321F6A] rounded-3xl shadow-lg p-4 md:p-8">
        {/* Navbar */}
        <nav className="mb-6">
          <div className="flex items-center justify-between flex-wrap">
            <a href="#" className="flex items-center space-x-3">
              <img src="src/assets/Logo.png" className="h-8" alt="Logo" />
              <span className="text-2xl font-light text-white font-worksans">
                {/* Logo Text */}
              </span>
            </a>

            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-[#8570EE] font-light"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <button className="text-white bg-[#8570EE] hover:bg-purple-800 font-worksans font-light rounded-lg text-sm px-4 py-2">
                Get started
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="flex flex-col mt-4 space-y-2 md:hidden">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-blue-300 font-light"
                >
                  {item}
                </a>
              ))}
              <button className="text-white bg-[#8570EE] hover:bg-purple-800 font-light rounded-lg text-sm px-4 py-2 mt-2">
                Get started
              </button>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-2">
          {/* Image */}
          <img
            src="src/assets/Home.png"
            className="w-full max-w-md lg:max-w-xl"
            alt="Home"
          />

          {/* Login Form */}
          <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <form className="space-y-6" action="#">
              <h5 className="text-3xl font-Abril text-[#321F6A]">Log In</h5>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8570EE] focus:border-[#8570EE] block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#8570EE] focus:border-[#8570EE] block w-full p-2.5"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#8570EE]"
                    required
                  />
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-[#8570EE] hover:underline">
                  Lost Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#8570EE] hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-[#8570EE] font-bold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>

              <div className="text-sm font-medium text-gray-500">
                Not registered?{" "}
                <a href="#" className="text-[#8570EE] hover:underline">
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer sm:footer-horizontal bg-[#321F6A] text-base-content p-10 text-white">
  <aside>
    <img src="src/assets/Logo.png" alt="" className="w-[150px]" />
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    <p>
      
      <br />
      Lorem Ipsum is simply dummy text of the printing <br></br>and typesetting industry. Lorem Ipsum has been <br></br>the industry's standard dummy text ever since the<br></br> 1500s, when an unknown printer took a galley of <br></br>type and scrambled it to make a type specimen book.
    </p>
  </aside><br></br>
   
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
</footer>
    </>
  );
}

export default App;
