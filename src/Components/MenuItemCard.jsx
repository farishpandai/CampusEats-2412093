// src/Components/MenuItemCard.jsx
function MenuItemCard({ item, onAdd, isFavorite, onToggleFavorite }) {
  const initial = item.name ? item.name.charAt(0) : '?'

  return (
    <div className="menu-item-card">
      <div className="thumb">{initial}</div>
      <span className="category-tag">{item.category}</span>

      {/* Digit 3 personal feature: lifted favorite toggle */}
      <button
        type="button"
        className="fav-btn"
        onClick={() => onToggleFavorite(item.id)}
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