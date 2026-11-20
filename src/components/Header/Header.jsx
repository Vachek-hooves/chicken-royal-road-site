import { useEffect, useState } from 'react'
import logoPrimary from '../../assets/brand/logo-primary.webp'
import './Header.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'How to Play', href: '#how-to-play' },
  { label: 'Features', href: '#features' },
  { label: 'Contacts', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#top" className="site-header__logo" aria-label="Chicken Royal Road home">
          <img src={logoPrimary} alt="Chicken Royal Road" />
        </a>

        <nav className={`site-header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary site-header__cta">
          Contact Sales
        </a>

        <button
          type="button"
          className={`site-header__burger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
