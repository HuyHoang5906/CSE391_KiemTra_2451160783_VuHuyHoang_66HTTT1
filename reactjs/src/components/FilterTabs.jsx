import React from 'react';

export default function FilterTabs({ currentFilter, setFilter, count }) {
  const tabs = ['Tất cả', 'Chưa bắt đầu', 'Đang triển khai', 'Hoàn thành'];
  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button 
          key={tab} 
          className={`tab-btn ${currentFilter === tab ? 'active' : ''}`}
          onClick={() => setFilter(tab)}
        >
          {tab}
        </button>
      ))}
      <span className="tab-count"><span>{count}</span> hồ sơ</span>
    </div>
  );
}