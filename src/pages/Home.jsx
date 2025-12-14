import CategoryButton from "../components/homepage/CategoryButton";

export const Home = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center relative max-w-4xl w-full">
        {/* Neon glow effect -- Copied from template project :( */}
        <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>

        <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center tracking-tight mb-4 md:mb-8">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400">
            RICK & MORTY
          </span>
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-400 mt-2 tracking-widest">
            Welcome to the Rick and Morty Wiki
          </div>
        </h1>

        {/*https://dev.to/heyitsaastha/group-hover-using-tailwind-css-4a2l*/}
        <div className="relative flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12 w-full sm:w-auto">
          <CategoryButton
            link="/characters"
            colorClass="cyan"
            content="Characters"
          ></CategoryButton>
          <CategoryButton
            link="/locations"
            colorClass="green"
            content="Locations"
          ></CategoryButton>
          <CategoryButton
            link="/episodes"
            colorClass="purple"
            content="Episodes"
          ></CategoryButton>
        </div>
      </div>
    </div>
  );
};
