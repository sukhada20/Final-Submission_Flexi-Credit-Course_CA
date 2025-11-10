import React, { useState } from 'react';
import { properties as data } from '../data';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import FilterTabs from '../components/FilterTabs';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = data.filter(p => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === 'all' || p.type.toLowerCase().includes(filter);
    return matchSearch && matchFilter;
  });

  return (
    <div className="home">
      <section className="hero">
        <h1>Discover Your Next Home</h1>
        <p>Short-term, long-term rentals, and roommate matching</p>
        <SearchBar search={search} setSearch={setSearch} />
        <FilterTabs current={filter} setCurrent={setFilter} />
      </section>
      <div className="container">
        <h2 className="section-title">Featured Properties</h2>
        <div className="property-grid">
          {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
