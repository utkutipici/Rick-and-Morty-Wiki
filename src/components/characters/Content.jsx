import Card from './Card';
import Pagination from '../content/Pagination';
import  Loading  from '../content/Loading';
import Error from '../content/Error';
import Header from '../content/Header';

export const Content = ({ characters, loading, error, pageInfo, currentPage, onPageChange }) => {
  if (loading) {
    return (
      <Loading />
    );
  }

  if (error) {
    return (
      <Error message={error} />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
        <Header currentPage={currentPage} pageInfo={pageInfo} title="Characters"></Header>
      
      <div className='px-8'>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </div>

      <Pagination 
        pageInfo={pageInfo} 
        currentPage={currentPage} 
        onPageChange={onPageChange}
      />

      {characters.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-xl">No characters found</p>
        </div>
      )}
    </div>
  );
};

export default Content;