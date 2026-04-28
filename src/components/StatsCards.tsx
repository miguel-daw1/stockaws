interface Props {
  stats: { totalProducts: number; totalValue: number; lowStock: number };
}

export const StatsCards = ({ stats }: Props) => (
  <div className="row g-4 mb-4">
    <div className="col-md-4">
      <div className="card shadow-sm border-0 border-start border-primary border-5 h-100">
        <div className="card-body d-flex align-items-center">
          <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
            <i className="bi bi-box-seam text-primary fs-4"></i>
          </div>
          <div>
            <p className="text-muted small fw-bold mb-0">TOTAL PRODUCTOS</p>
            <h2 className="fw-bold mb-0">{stats.totalProducts}</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm border-0 border-start border-success border-5 h-100">
        <div className="card-body d-flex align-items-center">
          <div className="bg-success bg-opacity-10 p-3 rounded-circle me-3">
            <i className="bi bi-currency-dollar text-success fs-4"></i>
          </div>
          <div>
            <p className="text-muted small fw-bold mb-0">VALOR TOTAL</p>
            <h2 className="fw-bold mb-0">${stats.totalValue.toLocaleString()}</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card shadow-sm border-0 border-start border-danger border-5 h-100">
        <div className="card-body d-flex align-items-center">
          <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
            <i className="bi bi-exclamation-triangle text-danger fs-4"></i>
          </div>
          <div>
            <p className="text-muted small fw-bold mb-0">STOCK BAJO {'(< 5)'}</p>
            <h2 className="fw-bold mb-0 text-danger">{stats.lowStock}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);