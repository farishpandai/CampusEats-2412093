// src/components/Header.jsx
function Header({ cartCount, onShowMenu, onShowCart }) {
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#005a43', color: '#fff' }}>
      <h1 className="logo" style={{ margin: 0, cursor: 'pointer' }} onClick={onShowMenu}>CampusEats</h1>
      <nav className="nav" style={{ display: 'flex', gap: '1rem' }}>
        <button 
          type="button" 
          className="link" 
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}
          onClick={onShowMenu}
        >
          Vendors
        </button>
        <button 
          type="button" 
          className="link cart" 
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1rem', cursor: 'pointer' }}
          onClick={onShowCart}
        >
          Cart <span className="badge" style={{ background: '#fff', color: '#005a43', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold' }}>{cartCount}</span>
        </button>
      </nav>
    </header>
  )
}

export default Header