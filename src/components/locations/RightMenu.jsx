import { useState } from "react";

export const RightMenu = ({ filters, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState(filters);

  const handleInputChange = (field, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApplyFilters = () => {
    onFilterChange(localFilters);
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    const emptyFilters = { name: "", type: "", dimension: "" };
    setLocalFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-green-500 border border-green-400 rounded-full text-white hover:bg-green-600 transition shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
        fixed lg:static
        top-0 right-0
        h-full w-80 lg:w-full
        bg-slate-800 border-l border-green-500/30
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
        p-6 overflow-y-auto
      `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h3 className="text-white text-xl font-bold mb-6">Filters</h3>

        <div className="space-y-4">
          <div>
            <label className="text-gray-300 font-medium block mb-2">
              Location Name
            </label>
            <input
              type="text"
              value={localFilters.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Search by name"
              className="w-full bg-slate-700 border border-green-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-green-400 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium block mb-2">Type</label>
            <input
              type="text"
              value={localFilters.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
              placeholder="Example: Planet, Space station"
              className="w-full bg-slate-700 border border-green-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-green-400 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="text-gray-300 font-medium block mb-2">
              Dimension
            </label>
            <input
              type="text"
              value={localFilters.dimension}
              onChange={(e) => handleInputChange("dimension", e.target.value)}
              placeholder="Example C-137, unknown"
              className="w-full bg-slate-700 border border-green-500/30 text-white rounded px-3 py-2 focus:outline-none focus:border-green-400 placeholder-gray-500"
            />
          </div>

          <div className="space-y-2">
            <button
              onClick={handleApplyFilters}
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded transition"
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
