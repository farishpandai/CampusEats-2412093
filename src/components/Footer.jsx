// src/components/Footer.jsx
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>&copy; {currentYear} CampusEats - BICS 3301, IIUM</p>
    </footer>
  )
}

export default Footer