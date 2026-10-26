// src/components/MenuItemCard.jsx
import { useState } from 'react'

function MenuItemCard({ item, onAdd }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const initial = item.name ? item.name.charAt(0) : '?'

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev)
  }

  return (
    <div className="menu-item-card">
      <div className="thumb">{initial}</div>
      <span className="category-tag">{item.category}</span>

      {/* Matric Digit 3 Personal Feature: Favorite toggle button */}
      <button
        type="button"
        className="fav-btn"
        onClick={toggleFavorite}
        aria-label="Toggle favourite"
      >
        {isFavorite ? '♥' : '♡'}
      </button>

      <h3>{item.name}</h3>
      <p className="item-description">{item.description}</p>
      <p className="price">RM {Number(item.price).toFixed(2)}</p>

      <button
        type="button"
        className="btn"
        disabled={!item.available}
        onClick={() => onAdd(item)}
      >
        {item.available ? 'Add to cart' : 'Sold out'}
      </button>
    </div>
  )
}

export default MenuItemCard