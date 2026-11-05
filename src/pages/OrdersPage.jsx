import { Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (!orders || orders.length === 0) {
    return (
      <section>
        <h2 className="section-title">My Orders</h2>
        <p className="muted">You have not placed any orders yet.</p>
        <p style={{ marginTop: '1rem' }}>
          <Link to="/" className="btn" style={{ width: 'auto', padding: '0.5rem 1rem' }}>
            Browse vendors
          </Link>
        </p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="section-title">My Orders</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {orders.map((order) => (
          <article key={order.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e4e7eb', paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>
              <div>
                <h3>Order for {order.name}</h3>
                <p className="muted">
                  Mahallah {order.mahallah} &middot; Pickup at <strong>{order.pickupTime}</strong>
                </p>
              </div>
              <span className="status open">Placed</span>
            </div>
            <ul className="cart-list">
              {order.items?.map((line) => (
                <li key={line.item.id} className="cart-line" style={{ gridTemplateColumns: '1fr auto auto' }}>
                  <span className="cart-name">{line.item.name}</span>
                  <span className="muted">&times; {line.qty}</span>
                  <span className="line-total">RM {(line.item.price * line.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: RM {Number(order.total).toFixed(2)}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default OrdersPage
