import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="mt-2">
            Email: <a href="mailto:info@inigma.com">info@inigma.com</a>
          </p>
          <p className="mt-1">
            Phone: <a href="tel:+123456789">+1 (234) 567-89</a>
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl font-semibold">About Us</h3>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum tortor sit amet tincidunt.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-2">
            <a
              href="#"
              className="text-white hover:text-gray-400 mx-2 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 mx-2 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 mx-2 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-2">
        <div className="container mx-auto text-center">
          <p className="text-white">
            &copy; 2023 inigma. All rights reserved. Powered by inigma.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
