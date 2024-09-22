import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white  shadow  dark:bg-gray-800">
      <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="https://flowbite.com/" className="hover:underline">
            MovieMinds
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="https://www.linkedin.com/in/ragulb05/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="mr-2 h-6 " />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/RagulB-05"
              target="_blank"
              rel="noreferrer"
              className="hover:underline me-4 md:me-6"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 h-6" />
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
