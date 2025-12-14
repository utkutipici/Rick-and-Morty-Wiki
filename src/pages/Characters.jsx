import Content from "../components/characters/Content";
import useCharacters from "../hooks/useCharacters";
import RightMenu from "../components/characters/RightMenu";

export const Characters = () => {
  const {
    characters,
    loading,
    error,
    pageInfo,
    currentPage,
    setCurrentPage,
    filters,
    setFilters,
  } = useCharacters();

  return (
    <div className="min-h-screen bg-black flex">
      <div className="w-full lg:w-4/5">
        <Content
          characters={characters}
          loading={loading}
          error={error}
          pageInfo={pageInfo}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className="lg:block lg:w-1/5">
        <RightMenu filters={filters} onFilterChange={setFilters} />
      </div>
    </div>
  );
};
