import { useParams, useNavigate } from "react-router-dom";
import useSingleEpisode from "../hooks/useSingleEpisode";
import Loading from "../components/content/Loading";
import Error from "../components/detailpage/Error";
import BackButton from "../components/detailpage/BackButton";
import Card from "../components/characters/Card";

export const EpisodeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { episode, characters, loading, error } = useSingleEpisode(id);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!episode) return <Error message="Episode Not Found" />;

  return (
    <div className="min-h-screen bg-black text-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <BackButton onClick={() => navigate("/episodes")} />

        <div className="bg-linear-to-r from-purple-900/20 to-slate-900/50 rounded-lg p-6 lg:p-8 border border-purple-500/30 mb-8">
          <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            {episode.episode}
          </div>

          <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-purple-400">
            {episode.name}
          </h1>

          <div className="flex items-center gap-2 text-slate-300 mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-lg">{episode.air_date}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>
              {characters.length} Character{characters.length !== 1 ? "s" : ""}{" "}
              in this episode
            </span>
          </div>
        </div>

        {characters.length > 0 && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-purple-400">
              Characters in this Episode
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {characters.map((character) => (
                <Card key={character.id} character={character} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
