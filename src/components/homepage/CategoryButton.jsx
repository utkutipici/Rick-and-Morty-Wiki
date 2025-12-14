export const CategoryButton = ({ link, colorClass, content }) => {
  const colorClasses = {
    cyan: "border-cyan-400 text-cyan-400 hover:bg-cyan-400",
    green: "border-green-400 text-green-400 hover:bg-green-400",
    purple: "border-purple-400 text-purple-400 hover:bg-purple-400",
  };

  return (
    <a
      href={link}
      className={`group px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 ${colorClasses[colorClass]} font-semibold rounded-sm hover:text-black transition-all duration-300 uppercase tracking-wider w-full sm:w-auto text-center`}
    >
      <span className="group-hover:scale-110 inline-block transition-transform">
        {content}
      </span>
    </a>
  );
};

export default CategoryButton;
