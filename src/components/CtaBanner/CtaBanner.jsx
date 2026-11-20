import ctaBg from '../../assets/cta/cta-bg.webp'
import chickenBarrel from '../../assets/cta/chicken-barrel.webp'
import './CtaBanner.css'

function CtaBanner() {
  return (
    <section className="cta-banner">
      <img className="cta-banner__bg" src={ctaBg} alt="" aria-hidden="true" />
      <img className="cta-banner__chicken" src={chickenBarrel} alt="" aria-hidden="true" />

      <div className="container cta-banner__inner">
        <span className="eyebrow eyebrow--light">Play the Demo</span>
        <h2>
          Ready to explore
          <br />
          the <span className="cta-banner__accent">royal</span> waters?
        </h2>
        <p>Discover the world of Chicken Royal Road and experience its unique gameplay mechanics.</p>

        <div className="cta-banner__actions">
          <a className="btn btn-primary" href="#how-to-play">
            ▶ Try the Demo
          </a>
          <a className="btn btn-link cta-banner__link" href="#contact">
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBanner
