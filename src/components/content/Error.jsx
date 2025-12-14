export const Error = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-red-400 text-xl font-semibold">Error: {message}</p>
      </div>
    </div>
  );
};

export default Error;
