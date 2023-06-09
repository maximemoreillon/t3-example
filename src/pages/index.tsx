import { type NextPage } from "next";
import Head from "next/head";
import CreateMovieForm from "~/components/CreateMovieForm";
import MovieTableRow from "~/components/MovieTableRow";
import { api } from "~/utils/api";

const Home: NextPage = () => {

  const {data: movies, refetch} = api.movie.getAll.useQuery();

  return (
    <>
      <Head>
        <title>T3 app example</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-6">
        <h1 className="text-4xl my-6">My movies</h1>

        {movies && <table className="">
          <thead>
            <tr className="text-left">

            <th>ID</th>
            <th>Title</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>

        {movies.map((movie: any) => <MovieTableRow movie={movie} key={movie.id} onDeleted={refetch}/>)}
        {/* TODO: typing */}

          </tbody>
        </table>}

        <CreateMovieForm onCreated={refetch}/>
      </main>
    </>
  );
};

export default Home;

