export const BackButton = ({ category }) => {
  return (
    <button
      onClick={() => navigate(`/${category}`)}
      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to {category}
    </button>
  );
};

export default BackButton;
