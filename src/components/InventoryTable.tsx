import type { Product } from '../types';

interface Props {
  products: Product[];
  onDelete: (id: string) => void;
}

export const InventoryTable = ({ products, onDelete }: Props) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-5">
        <i className="bi bi-archive text-muted display-1"></i>
        <h4 className="mt-3 text-muted fw-bold">Inventario Vacío</h4>
        <p className="text-muted">No hay productos registrados en este momento.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-dark align-middle mb-0">
        <thead className="bg-light">
          <tr>
            <th className="px-4 py-3 border-0 text-muted small fw-bold">PRODUCTO</th>
            <th className="py-3 border-0 text-muted small fw-bold">CATEGORÍA</th>
            <th className="py-3 border-0 text-muted small fw-bold">PRECIO</th>
            <th className="py-3 border-0 text-muted small fw-bold">STOCK</th>
            <th className="py-3 border-0 text-muted small fw-bold text-end px-4">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="px-4 py-3 fw-bold">{p.name}</td>
              <td><span className="badge rounded-pill bg-secondary bg-opacity-10 text-secondary border">{p.category}</span></td>
              <td>${Number(p.price).toFixed(2)}</td>
              <td>
                <span className={`fw-bold ${p.stock < 5 ? 'text-danger' : 'text-dark'}`}>
                  {p.stock} unidades
                </span>
              </td>
              <td className="text-end px-4">
                <button 
                  className="btn btn-sm btn-outline-danger border-0"
                  onClick={() => p.id && onDelete(p.id)}
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};