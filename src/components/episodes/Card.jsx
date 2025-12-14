export const Card = ({ episode }) => {
  return (
    <a
      href={`/episodes/${episode.id}`}
      className="bg-slate-800 border border-purple-500/20 hover:border-purple-400 rounded-lg p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded text-purple-400 text-xs font-mono font-semibold">
          {episode.episode}
        </span>
      </div>

      <h3 className="text-white font-bold text-lg leading-tight line-clamp-2 min-h-14">
        {episode.name}
      </h3>

      
      <div className="h-px bg-linear-to-r from-purple-500/50 to-transparent"></div>

      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>{episode.air_date}</span>
      </div>
    </a>
  );
};

export default Card;
