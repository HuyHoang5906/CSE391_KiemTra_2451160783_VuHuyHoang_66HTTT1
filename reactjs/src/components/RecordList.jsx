import React from 'react';
import RecordCard from './RecordCard';

export default function RecordList({ records }) {
  if (records.length === 0) {
    return <p style={{ textAlign: 'center', marginTop: '20px' }}>Không có hồ sơ nào.</p>;
  }
  return (
    <div className="record-list">
      {records.map(record => (
        <RecordCard key={record.id} record={record} />
      ))}
    </div>
  );
}