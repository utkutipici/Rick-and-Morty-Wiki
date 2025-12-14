export const Card = ({ location }) => {
    return (
        <a 
            href={`/locations/${location.id}`}
            className="group relative overflow-hidden rounded-lg bg-slate-800 border border-green-500/20 hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 p-6 min-h-50 flex flex-col justify-between"        
        >
            <div className="space-y-2">
                <h2 className="text-white text-xl font-bold leading-tight group-hover:text-green-400 transition line-clamp-2">
                    {location.name}
                </h2>
                <div className="h-0.5 w-12 bg-linear-to-r from-green-400 to-transparent"></div>
            </div>

            <div className="space-y-3 mt-4">
                {/* Type */}
                <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Type</p>
                        <p className="text-gray-300 text-sm font-medium">{location.type || 'Unknown'}</p>
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Dimension</p>
                        <p className="text-gray-300 text-sm font-medium line-clamp-1">{location.dimension || 'Unknown'}</p>
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider">Residents</p>
                        <p className="text-gray-300 text-sm font-medium">{location.residents?.length || 0}</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>
    );
}

export default Card;