import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="max-w-2xl w-full text-center">
                <div className="mb-8">
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-500 to-green-400 mb-4 animate-pulse">
                        404
                    </h1>
                    <div className="h-2 w-32 mx-auto bg-linear-to-r from-cyan-400 via-purple-500 to-green-400 rounded-full"></div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-slate-400 text-lg mb-2">
                        The page you're looking for doesn't exist in this dimension.
                    </p>
                    <p className="text-slate-500">
                        Maybe it got lost in the multiverse...
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="group relative px-8 py-4 bg-linear-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Back to Home
                        </span>
                    </button>

                    <button
                        onClick={() => navigate('/characters')}
                        className="group relative px-8 py-4 bg-slate-800 text-white font-bold rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
                    >
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Browse Characters
                        </span>
                    </button>
                </div>

                <div className="mt-16 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-64 h-64 bg-linear-to-r from-cyan-500 via-purple-500 to-green-500 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
