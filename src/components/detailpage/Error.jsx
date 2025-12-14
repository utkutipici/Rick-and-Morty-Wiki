export const Error = ({ category, message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <p className="text-red-400 text-xl font-semibold mb-4">{message}</p>
        <button
          onClick={() => navigate(`/${category}`)}
          className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded transition"
        >
          Back to {category}
        </button>
      </div>
    </div>
  );
};
export default Error;
