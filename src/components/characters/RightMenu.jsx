import { useState } from 'react';

export const RightMenu = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (field, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    const emptyFilters = { name: '', status: '', species: '', gender: '' };
    setLocalFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-cyan-500 border border-cyan-400 rounded-full text-white hover:bg-cyan-600 transition shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Content */}
      <div className={`
        fixed lg:static
        top-0 right-0
        h-full w-80 lg:w-full
        bg-slate-800 border-l border-cyan-500/30
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        p-6 overflow-y-auto
      `}>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-white text-xl font-bold mb-6">Filters</h3>
        
        <div className="space-y-4">
          {/* Name Filter */}
          <div>
            <label className="text-gray-300 font-medium block mb-2">Name</label>
            <input 
              type="text" 
              value={localFilters.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Search by name" 
              className="w-full bg-slate-700 border border-cyan-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-cyan-400 placeholder-gray-500"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="text-gray-300 font-medium block mb-2">Status</label>
            <select 
              value={localFilters.status}
              onChange={(e) => handleInputChange('status', e.target.value)}
              className="w-full bg-slate-700 border border-cyan-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-cyan-400"
            >
              <option value="">All</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Species Filter */}
          <div>
            <label className="text-gray-300 font-medium block mb-2">Species</label>
            <input 
              type="text"
              value={localFilters.species}
              onChange={(e) => handleInputChange('species', e.target.value)}
              placeholder="Search species" 
              className="w-full bg-slate-700 border border-cyan-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-cyan-400 placeholder-gray-500"
            />
          </div>

          {/* Gender Filter */}
          <div>
            <label className="text-gray-300 font-medium block mb-2">Gender</label>
            <select
              value={localFilters.gender}
              onChange={(e) => handleInputChange('gender', e.target.value)}
              className="w-full bg-slate-700 border border-cyan-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-cyan-400"
            >
              <option value="">All</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="space-y-2">
            <button 
              onClick={handleApplyFilters}
              className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded transition"
            >
              Apply Filters
            </button>
            <button 
              onClick={handleClearFilters}
              className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 text-gray-300 font-medium rounded transition"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightMenu;
