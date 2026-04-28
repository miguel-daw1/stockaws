import { useState } from 'react';
import type { Product } from '../types';

interface Props {
  onAdd: (product: Product) => void;
}

export const ProductForm = ({ onAdd }: Props) => {
  const [form, setForm] = useState({ name: '', category: 'General', price: '', stock: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    onAdd({
      name: form.name,
      category: form.category,
      price: Number(form.price) || 0,
      stock: Number(form.stock) || 0
    });
    
    setForm({ name: '', category: 'General', price: '', stock: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-12">
        <label className="form-label fw-bold small">Nombre</label>
        <input type="text" name="name" className="form-control bg-light border-0" value={form.name} onChange={handleChange} required placeholder="Nombre del artículo" />
      </div>
      <div className="col-md-6">
        <label className="form-label fw-bold small">Categoría</label>
        <select name="category" className="form-select bg-light border-0" value={form.category} onChange={handleChange}>
          <option value="General">General</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>
      <div className="col-md-3">
        <label className="form-label fw-bold small">Precio</label>
        <input type="number" name="price" className="form-control bg-light border-0" value={form.price} onChange={handleChange} placeholder="0.00" min="0" step="0.01" />
      </div>
      <div className="col-md-3">
        <label className="form-label fw-bold small">Stock</label>
        <input type="number" name="stock" className="form-control bg-light border-0" value={form.stock} onChange={handleChange} placeholder="0" min="0" />
      </div>
      <div className="col-12 mt-4 pt-2">
        <button type="submit" className="btn btn-primary w-100 fw-bold py-2" data-bs-dismiss="modal">Guardar Producto</button>
      </div>
    </form>
  );
};