import MenuItemCard from './MenuItemCard.jsx'
import { useCart } from '../hooks/useCart.js'

function MenuList({ items = [] }) {
  const { addToCart, favorites, toggleFavorite } = useCart()

  if (!items || items.length === 0) {
    return <p className="muted">No items on this menu yet.</p>
  }

  return (
    <div className="grid">
      {items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          onAdd={addToCart}
          isFavorite={favorites.includes(item.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  )
}

export default MenuList
