import { Link } from 'react-router'
import MenuList from '../components/MenuList.jsx'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import { useVendors } from '../hooks/useVendors.js'
import { useCart } from '../hooks/useCart.js'

function FavouritesPage() {
  const { vendors, loading, error, reload } = useVendors()
  const { favorites } = useCart()

  if (loading) return <Loading />
  if (error) return <ErrorMessage message={error} onRetry={reload} />

  const allItems = vendors.flatMap((vendor) =>
    vendor.menu.map((item) => ({ ...item, vendorName: vendor.name, vendorId: vendor.id }))
  )
  const favouriteItems = allItems.filter((item) => favorites.includes(item.id))

  return (
    <section>
      <h2 className="section-title">My Favourite Items ({favouriteItems.length})</h2>
      {favouriteItems.length === 0 ? (
        <div className="card">
          <p className="muted">
            You have no favourite items saved yet. Tap the heart icon (♡) on any dish to save it here!
          </p>
          <p style={{ marginTop: '1rem' }}>
            <Link to="/" className="btn" style={{ width: 'auto', padding: '0.5rem 1rem' }}>
              Explore Menus
            </Link>
          </p>
        </div>
      ) : (
        <MenuList items={favouriteItems} />
      )}
    </section>
  )
}

export default FavouritesPage
