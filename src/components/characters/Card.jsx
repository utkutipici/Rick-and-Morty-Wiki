export const Card = ({ character }) => {
    return (
        <a 
            href={`/characters/${character.id}`}
            className="group relative overflow-hidden rounded-lg bg-slate-800 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20"
        >
            <div className="relative aspect-square overflow-hidden">
                <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">
                        {character.name}
                    </h3>
                    <p className="text-cyan-400 text-sm mt-1">
                        {character.species}
                    </p>
                </div>

                <div className="absolute top-3 right-3">
                    <span className={`
                        px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide
                        ${character.status === 'Alive' ? 'bg-green-500/90 text-white' : ''}
                        ${character.status === 'Dead' ? 'bg-red-500/90 text-white' : ''}
                        ${character.status === 'unknown' ? 'bg-gray-500/90 text-white' : ''}
                    `}>
                        {character.status}
                    </span>
                </div>
            </div>
        </a>
    );
};

export default Card;