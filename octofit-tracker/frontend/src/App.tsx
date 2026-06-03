import './App.css';

function App() {
  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0">
        <div className="card-body text-center">
          <h1 className="display-5 mb-3">OctoFit Tracker</h1>
          <p className="lead text-muted">
            Modern React 19 + Vite starter for the OctoFit Tracker frontend.
          </p>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <span className="badge bg-primary">React 19</span>
            <span className="badge bg-secondary">Vite</span>
            <span className="badge bg-success">Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
