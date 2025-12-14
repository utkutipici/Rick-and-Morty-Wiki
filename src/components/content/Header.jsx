export const Header = ({ currentPage, pageInfo, title }) => {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-white mb-2">
        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-400">
          {title}
        </span>
      </h1>
      <p className="text-gray-400">
        Page {currentPage} of {pageInfo.pages || 1} - Total:{" "}
        {pageInfo.count || 0} {title.toLowerCase()}
      </p>
    </div>
  );
};
export default Header;
