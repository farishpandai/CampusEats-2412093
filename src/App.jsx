// src/App.jsx
import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import CartPage from './components/CartPage.jsx'
import Footer from './components/Footer.jsx'
import { Loading, ErrorMessage } from './components/Status.jsx'

function App() {
  const [vendors, setVendors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [reloadKey, setReloadKey] = useState(0)

  const [selectedVendorId, setSelectedVendorId] = useState('')
  const [cart, setCart] = useState([]) // Array of { item, qty }
  const [view, setView] = useState('menu') // 'menu' | 'cart' | 'done'
  const [lastOrder, setLastOrder] = useState(null)

  // Matric Digit 3 Personal Feature: Lifted favourites state & filter toggle
  const [favorites, setFavorites] = useState([])
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  // B2: Fetch vendors with useEffect, AbortController, and cleanup
  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    fetch('/api/vendors.json', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setVendors(data)
        if (data.length > 0) {
          setSelectedVendorId((prev) => prev || data[0].id)
        }
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [reloadKey])

  // B3: Cart management handlers (immutability preserved)
  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((line) => line.item.id === item.id)
      if (existing) {
        return prev.map((line) =>
          line.item.id === item.id ? { ...line, qty: line.qty + 1 } : line
        )
      }
      return [...prev, { item, qty: 1 }]
    })
  }

  const handleChangeQty = (itemId, delta) => {
    setCart((prev) =>
      prev
        .map((line) =>
          line.item.id === itemId ? { ...line, qty: line.qty + delta } : line
        )
        .filter((line) => line.qty > 0)
    )
  }

  const handleRemove = (itemId) => {
    setCart((prev) => prev.filter((line) => line.item.id !== itemId))
  }

  // B5: Place order handler
  const handlePlaceOrder = (details) => {
    const total = cart.reduce((sum, line) => sum + line.item.price * line.qty, 0)
    setLastOrder({ ...details, total })
    setCart([])
    setView('done')
  }

  // Digit 3 Personal Feature: Toggle favorite ID
  const handleToggleFavorite = (itemId) => {
    setFavorites((prev) =>
      prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    )
  }

  // Derived state calculations
  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0)
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId)

  // Filter menu items if "Favourites only" is toggled
  const displayedMenuItems = selectedVendor
    ? selectedVendor.menu.filter((item) =>
        showFavoritesOnly ? favorites.includes(item.id) : true
      )
    : []

  // Conditional view rendering
  let content
  if (loading) {
    content = <Loading />
  } else if (error) {
    content = (
      <ErrorMessage
        message={error}
        onRetry={() => setReloadKey((k) => k + 1)}
      />
    )
  } else if (view === 'cart') {
    content = (
      <CartPage
        cart={cart}
        onChangeQty={handleChangeQty}
        onRemove={handleRemove}
        onPlaceOrder={handlePlaceOrder}
      />
    )
  } else if (view === 'done') {
    content = (
      <div className="card order-success">
        <h2>Order Placed Successfully!</h2>
        <p>Thank you, <strong>{lastOrder?.name}</strong>.</p>
        <p>Your order will be ready at <strong>{lastOrder?.pickupTime}</strong> for Mahallah <strong>{lastOrder?.mahallah}</strong>.</p>
        <p className="cart-total">Total Paid: RM {lastOrder?.total.toFixed(2)}</p>
        <button
          type="button"
          className="btn"
          style={{ marginTop: '1rem' }}
          onClick={() => setView('menu')}
        >
          Order More
        </button>
      </div>
    )
  } else {
    content = (
      <>
        <section>
          <h2>Choose a vendor</h2>
          <div className="vendor-list">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                vendor={vendor}
                isSelected={vendor.id === selectedVendorId}
                onSelect={setSelectedVendorId}
              />
            ))}
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Menu: {selectedVendor ? selectedVendor.name : 'Not Found'}</h2>
            
            {/* Digit 3 Personal Feature: Favourites filter toggle */}
            <button
              type="button"
              className={`fav-toggle-btn ${showFavoritesOnly ? 'active' : ''}`}
              onClick={() => setShowFavoritesOnly((prev) => !prev)}
            >
              {showFavoritesOnly ? '♥ Showing Favourites' : '♡ Favourites only'}
            </button>
          </div>

          <MenuList
            items={displayedMenuItems}
            onAdd={handleAddToCart}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        </section>
      </>
    )
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onShowMenu={() => setView('menu')}
        onShowCart={() => setView('cart')}
      />
      <main className="container">{content}</main>
      <Footer />
    </>
  )
}

export default App