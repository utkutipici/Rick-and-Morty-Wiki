export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400 mx-auto mb-4"></div>
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
