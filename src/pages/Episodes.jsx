import Content from "../components/episodes/Content";
import useEpisodes from "../hooks/useEpisodes";
import RightMenu from "../components/episodes/RightMenu";

export const Episodes = () => {
  const {
    episodes,
    loading,
    error,
    pageInfo,
    currentPage,
    setCurrentPage,
    filters,
    setFilters,
  } = useEpisodes();

  return (
    <div className="min-h-screen bg-black flex">
      <div className="w-full lg:w-4/5">
        <Content
          episodes={episodes}
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

export default Episodes;
