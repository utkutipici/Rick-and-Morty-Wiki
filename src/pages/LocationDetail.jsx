import { useParams, useNavigate } from "react-router-dom";
import useSingleLocation from "../hooks/useSingleLocation";
import Loading from "../components/content/Loading";
import Error from "../components/detailpage/Error";
import BackButton from "../components/detailpage/BackButton";
import Card from "../components/characters/Card";

export const LocationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { location, residents, loading, error } = useSingleLocation(id);

  if (loading) {
    return <Loading />;
  }

  if (error || !location) {
    return <Error message="Location not found" category="locations" />;
  }

  return (
    <div className="min-h-screen bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <BackButton category="locations" />

        <div className="mb-8">
          <h1 className="text-5xl font-black text-white mb-4">
            {location.name}
          </h1>
          <div className="h-1 w-24 bg-linear-to-r from-green-400 to-cyan-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 border border-green-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Type
              </p>
            </div>
            <p className="text-white text-xl font-bold">
              {location.type || "Unknown"}
            </p>
          </div>

          <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Dimension
              </p>
            </div>
            <p className="text-white text-xl font-bold">
              {location.dimension || "Unknown"}
            </p>
          </div>

          <div className="bg-slate-800 border border-purple-500/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Residents
              </p>
            </div>
            <p className="text-white text-3xl font-bold">
              {location.residents?.length || 0}
            </p>
            <p className="text-gray-500 text-sm mt-1">Known residents</p>
          </div>
        </div>

        {residents.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-cyan-400">
                Residents
              </span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {residents.map((character) => (
                <Card key={character.id} character={character} />
              ))}
            </div>
          </div>
        )}

        {residents.length === 0 && (
          <div className="text-center py-12 bg-slate-800 rounded-lg border border-gray-700">
            <p className="text-gray-400 text-lg">
              No known residents in this location
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationDetail;
