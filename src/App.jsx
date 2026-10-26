// src/App.jsx
import { useState } from 'react'
import vendors from "./data/vendor.js";
import Header from './components/HEader.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuList from './components/MenuList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [selectedVendorId, setSelectedVendorId] = useState(vendors[0]?.id || '')
  const [cart, setCart] = useState([])

  // Derived state: find the currently active vendor
  const selectedVendor = vendors.find((v) => v.id === selectedVendorId)

  // Immutable cart update
  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item])
  }

  return (
    <>
      <Header cartCount={cart.length} />

      <main className="container">
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

        <section>
          <h2>Menu: {selectedVendor ? selectedVendor.name : 'Not Found'}</h2>
          <MenuList
            items={selectedVendor ? selectedVendor.menu : []}
            onAdd={handleAddToCart}
          />
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App