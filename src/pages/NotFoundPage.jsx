import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
      <h2>404 — Page Not Found</h2>
      <p className="muted">No page here. The address you visited does not exist.</p>
      <p style={{ marginTop: '1.25rem' }}>
        <Link to="/" className="btn" style={{ width: 'auto', padding: '0.55rem 1.25rem' }}>
          Back to Home
        </Link>
      </p>
    </div>
  )
}

export default NotFoundPage
