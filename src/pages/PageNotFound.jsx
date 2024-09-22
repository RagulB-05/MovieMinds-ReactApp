import React from "react";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-5xl text-gray-700 font-bold mt-20 mb-5 dark:text-white justify-center">
            404, Oops!
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Back to MovieMinds
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
