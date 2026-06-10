import React, { useState } from 'react';
import Header from './components/Header';
import RecordForm from './components/RecordForm';
import FilterTabs from './components/FilterTabs';
import RecordList from './components/RecordList';
import { records as initialData } from './data/data';

function App() {
  const [records, setRecords] = useState(initialData);
  const [filter, setFilter] = useState('Tất cả');

  const displayedRecords = filter === 'Tất cả' ? records : records.filter(r => r.status === filter);

  const handleAdd = (newRecord) => {
    setRecords([{ ...newRecord, id: Date.now() }, ...records]);
    setFilter('Tất cả');
  };

  return (
    <>
      <Header />
      <div className="container">
        <aside className="sidebar">
          <RecordForm onAdd={handleAdd} />
        </aside>
        <main className="main-content">
          <FilterTabs currentFilter={filter} setFilter={setFilter} count={displayedRecords.length} />
          <RecordList records={displayedRecords} />
        </main>
      </div>
    </>
  );
}

export default App;