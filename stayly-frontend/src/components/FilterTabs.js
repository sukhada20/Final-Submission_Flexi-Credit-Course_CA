import React from 'react';

const FilterTabs = ({ current, setCurrent }) => {
  const tabs = ['all', 'short-term', 'long-term', 'roommate'];

  return (
    <div className="filter-tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={`filter-tab ${current === tab ? 'active' : ''}`}
          onClick={() => setCurrent(tab)}
        >
          {tab === 'all' ? 'All Properties' :
           tab === 'short-term' ? 'Short-Term' :
           tab === 'long-term' ? 'Long-Term' : 'Roommate'}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
