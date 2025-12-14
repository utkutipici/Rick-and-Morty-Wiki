import Card from "./Card";
import Loading from "../content/Loading";
import Pagination from "../content/Pagination";
import Error from "../content/Error";
import Header from "../content/Header";

export const Content = ({
  episodes,
  loading,
  error,
  pageInfo,
  currentPage,
  onPageChange,
}) => {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Header
        currentPage={currentPage}
        pageInfo={pageInfo}
        title="Episodes"
      ></Header>

      <div className="px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {episodes.map((episode) => (
            <Card key={episode.id} episode={episode} />
          ))}
        </div>
      </div>

      <Pagination
        pageInfo={pageInfo}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      {episodes.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-xl">No episodes found</p>
        </div>
      )}
    </div>
  );
};

export default Content;
