import MovieCard from "../components/MovieCard";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 my-10">
        <div className="flex justify-center flex-wrap col-auto">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
