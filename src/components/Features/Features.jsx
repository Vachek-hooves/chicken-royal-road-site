import feature1 from '../../assets/features/feature-1.webp'
import feature2 from '../../assets/features/feature-2.webp'
import feature3 from '../../assets/features/feature-3.webp'
import './Features.css'

const FEATURES = [
  { image: feature1, alt: 'Feature 01 — Royal Ship: set sail aboard a distinctive royal vessel designed for an unforgettable ocean adventure.' },
  { image: feature2, alt: 'Feature 02 — Dangerous Waters: encounter sharks, sea mines, whirlpools, and other unexpected obstacles along the route.' },
  { image: feature3, alt: 'Feature 03 — Rising Multipliers: every successful step increases the multiplier, creating an engaging risk-and-reward decision.' },
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">👑 Game Features</span>
          <h2>Built for an unforgettable adventure.</h2>
          <p>A distinctive combination of simple mechanics, dynamic obstacles, and an unforgettable nautical world.</p>
        </div>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <img key={feature.alt} className="feature-card" src={feature.image} alt={feature.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
