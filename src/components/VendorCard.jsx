import { Link } from 'react-router'

function VendorCard({ vendor }) {
  const initial = vendor.name ? vendor.name.charAt(0) : '?'

  return (
    <Link to={`/vendor/${vendor.id}`} className="card vendor-card">
      <div className="thumb" aria-hidden="true">{initial}</div>
      <div className="vendor-info">
        <h3>{vendor.name}</h3>
        <p className="vendor-location">{vendor.location}</p>
        <p className="vendor-hours">Open: {vendor.openHours}</p>
        <span className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </Link>
  )
}

export default VendorCard
