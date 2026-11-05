import { useState } from 'react'
import { useParams, Link } from 'react-router'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendors.js'
import { useCart } from '../hooks/useCart.js'

function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()
  const { favorites } = useCart()
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const vendor = vendors.find((v) => v.id === id)
  if (!vendor) {
    return (
      <div className="card">
        <h2>Vendor not found</h2>
        <p className="muted">We could not find a vendor with ID &ldquo;{id}&rdquo;.</p>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/" className="btn" style={{ width: 'auto', padding: '0.5rem 1rem' }}>
            Back to vendors
          </Link>
        </p>
      </div>
    )
  }

  const displayedItems = showFavoritesOnly
    ? vendor.menu.filter((item) => favorites.includes(item.id))
    : vendor.menu

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <h2 className="section-title" style={{ marginBottom: '0.25rem' }}>Menu: {vendor.name}</h2>
          <p className="muted">{vendor.location} &middot; Open: {vendor.openHours}</p>
        </div>

        {/* Matric Digit 3 Personal Feature: Favourites filter toggle */}
        <button
          type="button"
          className={`fav-toggle-btn ${showFavoritesOnly ? 'active' : ''}`}
          onClick={() => setShowFavoritesOnly((prev) => !prev)}
        >
          {showFavoritesOnly ? '♥ Showing Favourites' : '♡ Favourites only'}
        </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <MenuList items={displayedItems} />
      </div>
    </section>
  )
}

export default VendorPage
