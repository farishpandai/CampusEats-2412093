// src/components/VendorCard.jsx
function VendorCard({ vendor, isSelected, onSelect }) {
  const initial = vendor.name ? vendor.name.charAt(0) : '?'

  return (
    <button
      type="button"
      className={`vendor-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(vendor.id)}
    >
      <div className="thumb">{initial}</div>
      <div className="vendor-info">
        <h3>{vendor.name}</h3>
        <p className="vendor-location">{vendor.location}</p>
        <p className="vendor-hours">Open: {vendor.openHours}</p>
        <span className={`status ${vendor.isOpen ? 'open' : 'closed'}`}>
          {vendor.isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
    </button>
  )
}

export default VendorCard