import logoPrimary from '../../assets/brand/logo-primary.webp'
import './Footer.css'

const EXPLORE_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'How to Play', href: '#how-to-play' },
  { label: 'Features', href: '#features' },
  { label: 'Contact Sales', href: '#contact' },
]

const LEGAL_LINKS = ['Privacy Policy', 'Terms & Conditions', 'Responsible Gaming']

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logoPrimary} alt="Chicken Royal Road" />
          <p>Chicken Royal Road is a crash-style adventure game that takes players across dangerous ocean routes in search of greater rewards.</p>
          <a href="#contact" className="btn btn-primary">
            Contact Sales
          </a>
        </div>

        <div className="site-footer__column">
          <h4>Explore</h4>
          <ul>
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h4>Legal</h4>
          <ul>
            {LEGAL_LINKS.map((label) => (
              <li key={label}>
                <a href="#top">{label}</a>
              </li>
            ))}
          </ul>

          <div className="site-footer__notice">
            <span className="site-footer__badge">18+</span>
            <p>This product is intended for licensed B2B partners. Play responsibly. Licensing and regulatory details will be published here.</p>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Chicken Royal Road. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
