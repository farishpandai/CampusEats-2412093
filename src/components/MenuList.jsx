// src/Components/MenuList.jsx
import MenuItemCard from './MenuItemCard.jsx'

function MenuList({ items = [], onAdd, favorites = [], onToggleFavorite }) {
  if (!items || items.length === 0) {
    return <p className="empty-notice">No items on this menu yet.</p>
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={onAdd}
          isFavorite={favorites.includes(item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default MenuList