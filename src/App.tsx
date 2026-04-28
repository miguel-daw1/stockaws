import { useInventory } from './hooks/useInventory';
import { StatsCards } from './components/StatsCards';
import { InventoryTable } from './components/InventoryTable';
import { ProductForm } from './components/ProductForm';

function App() {
  const { products, loading, stats, addProduct, deleteProduct } = useInventory();

  return (
    <div className="d-flex" style={{ backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside className="d-none d-lg-flex flex-column p-4 bg-dark text-white" style={{ width: '280px' }}>
        <div className="d-flex align-items-center mb-5">
          <div className="bg-primary p-2 rounded-3 me-2"><i className="bi bi-boxes fs-4"></i></div>
          <span className="fs-4 fw-bold">StockMaster <span className="text-primary">Pro</span></span>
        </div>
        <nav className="nav flex-column gap-2">
          <a href="#" className="nav-link text-white bg-primary bg-opacity-25 rounded-3 px-3 py-2"><i className="bi bi-grid-1x2 me-3"></i>Dashboard</a>
          <a href="#" className="nav-link text-secondary px-3 py-2"><i className="bi bi-inboxes me-3"></i>Inventario</a>
          <a href="#" className="nav-link text-secondary px-3 py-2"><i className="bi bi-graph-up me-3"></i>Reportes</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4 p-md-5">
        <header className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="h3 fw-bold mb-0">Dashboard Administrativo</h1>
            <p className="text-muted small">Gestión de existencias y valoración de activos.</p>
          </div>
          <button className="btn btn-primary px-4 py-2 fw-bold shadow-sm" data-bs-toggle="modal" data-bs-target="#addModal">
            <i className="bi bi-plus-lg me-2"></i>Añadir Item
          </button>
        </header>

        <StatsCards stats={stats} />

        <div className="card border-0 shadow-sm rounded-4 mt-4 overflow-hidden">
          <div className="card-header bg-white border-0 py-4 px-4">
            <h5 className="fw-bold mb-0">Detalle del Inventario</h5>
          </div>
          <div className="card-body p-0">
            {loading ? (
              <div className="text-center py-5"><div className="spinner-border text-primary"></div></div>
            ) : (
              <InventoryTable products={products} onDelete={deleteProduct} />
            )}
          </div>
        </div>

        {/* Modal */}
        <div className="modal fade" id="addModal" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-4">
              <div className="modal-header border-0 bg-light px-4 py-3">
                <h5 className="modal-title fw-bold">Registrar Nuevo Producto</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body p-4">
                <ProductForm onAdd={addProduct} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;