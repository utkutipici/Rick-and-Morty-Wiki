import Content from "../components/locations/Content";
import useLocations from "../hooks/useLocation";
import RightMenu from "../components/locations/RightMenu";

export const Locations = () => {
  const { locations, loading, error, pageInfo, currentPage, setCurrentPage, filters, setFilters } = useLocations();

  return (
    <div className="min-h-screen bg-black flex">
      <div className="w-full lg:w-4/5">
        <Content 
          locations={locations} 
          loading={loading} 
          error={error}
          pageInfo={pageInfo}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className="lg:block lg:w-1/5">
        <RightMenu 
          filters={filters}
          onFilterChange={setFilters}
        />
      </div>
    </div>
  );
};