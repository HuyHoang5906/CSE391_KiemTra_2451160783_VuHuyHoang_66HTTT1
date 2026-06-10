import React, { useState } from 'react';

export default function RecordForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', unit: '', status: '', desc: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: '', unit: '', status: '', desc: '' }); // Xóa trắng form sau khi thêm
  };

  return (
    <div className="card-form">
      <h3>Thêm hồ sơ mới</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên trường</label>
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Đơn vị quản lý</label>
          <select name="unit" className="form-control" value={form.unit} onChange={handleChange} required>
            <option value="">-- Chọn đơn vị --</option>
            <option value="Phòng GD&ĐT TP. Thủy Lợi">Phòng GD&ĐT TP. Thủy Lợi</option>
            <option value="Phòng GD&ĐT H. Thủy Nguyên">Phòng GD&ĐT H. Thủy Nguyên</option>
            <option value="Phòng GD&ĐT Q. Hồng Bàng">Phòng GD&ĐT Q. Hồng Bàng</option>
          </select>
        </div>
        <div className="form-group">
          <label>Trạng thái</label>
          <select name="status" className="form-control" value={form.status} onChange={handleChange} required>
            <option value="">-- Chọn trạng thái --</option>
            <option value="Chưa bắt đầu">Chưa bắt đầu</option>
            <option value="Đang triển khai">Đang triển khai</option>
            <option value="Hoàn thành">Hoàn thành</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mô tả</label>
          <textarea name="desc" className="form-control" value={form.desc} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="btn-submit">+ Thêm hồ sơ</button>
      </form>
    </div>
  );
}