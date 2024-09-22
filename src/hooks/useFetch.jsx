import React, { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setDate] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setDate(json.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [url]);
  return { data };
};
