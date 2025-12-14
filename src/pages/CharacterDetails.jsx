import { useParams, useNavigate } from "react-router-dom";
import useSingleCharacter from "../hooks/useSingleCharacter";
import Loading from "../components/content/Loading";
import Error from "../components/detailpage/Error";
import BackButton from "../components/detailpage/BackButton";

export const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { character, episodes, loading, error } = useSingleCharacter(id);

  if (loading) {
    return <Loading />;
  }

  if (error || !character) {
    return <Error message="Character not found" category="characters" />;
  }

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <BackButton category="characters" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <img
              src={character.image}
              alt={character.name}
              className="w-full rounded-lg shadow-2xl shadow-cyan-500/20"
            />
            <div className="absolute top-4 right-4">
              <span
                className={`
                                px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide
                                ${
                                  character.status === "Alive"
                                    ? "bg-green-500 text-white"
                                    : ""
                                }
                                ${
                                  character.status === "Dead"
                                    ? "bg-red-500 text-white"
                                    : ""
                                }
                                ${
                                  character.status === "unknown"
                                    ? "bg-gray-500 text-white"
                                    : ""
                                }
                            `}
              >
                {character.status}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-black text-white mb-2">
                {character.name}
              </h1>
              <div className="h-1 w-20 bg-linear-to-r from-cyan-400 to-purple-400"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                  Species
                </p>
                <p className="text-white text-lg font-semibold">
                  {character.species}
                </p>
              </div>

              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                  Gender
                </p>
                <p className="text-white text-lg font-semibold">
                  {character.gender}
                </p>
              </div>

              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                  Origin
                </p>
                <p className="text-white text-lg font-semibold">
                  {character.origin.name}
                </p>
              </div>

              <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-white text-lg font-semibold">
                  {character.location.name}
                </p>
              </div>
            </div>

            {character.type && (
              <div className="bg-slate-800 border border-purple-500/30 rounded-lg p-4">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">
                  Type
                </p>
                <p className="text-white text-lg font-semibold">
                  {character.type}
                </p>
              </div>
            )}

            <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                Episodes
              </p>
              <p className="text-white text-3xl font-bold">
                {character.episode.length}
              </p>
              <p className="text-gray-500 text-sm mt-1">Total appearances</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
              Episodes
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {episodes.map((episode) => (
              <a
                key={episode.id}
                href={`/episodes/${episode.id}`}
                className="bg-slate-800 border border-cyan-500/20 hover:border-cyan-400 rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <p className="text-cyan-400 text-sm font-mono mb-1">
                  {episode.episode}
                </p>
                <h3 className="text-white font-semibold mb-2 line-clamp-2">
                  {episode.name}
                </h3>
                <p className="text-gray-400 text-sm">{episode.air_date}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
