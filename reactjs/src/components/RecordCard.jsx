import React from 'react';

export default function RecordCard({ record }) {
  const getStatusClass = (status) => {
    if (status === 'Hoàn thành') return 'hoan-thanh';
    if (status === 'Đang triển khai') return 'dang-trien-khai';
    return 'chua-bat-dau';
  };
  const statusClass = getStatusClass(record.status);

  return (
    <div className={`record-card status-${statusClass}`}>
      <div className="record-header">
        <div className="record-title">🏢 {record.name}</div>
        <span className={`badge ${statusClass}`}>{record.status}</span>
      </div>
      <div className="record-unit">📍 {record.unit}</div>
      <div className="record-desc">{record.desc}</div>
    </div>
  );
}