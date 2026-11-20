import dockBg from '../../assets/about/dock-bg.webp'
import phoneMockup from '../../assets/about/phone-mockup.webp'
import multiplierBadge from '../../assets/about/multiplier-badge.webp'
import './About.css'

const FEATURES = [
  {
    icon: '📈',
    title: 'Dynamic Step-Based Gameplay',
    text: 'Every move forward is a new lane, a new obstacle, and a new decision.',
  },
  {
    icon: '📊',
    title: 'Rising Multipliers',
    text: 'The multiplier climbs with each successful step across the water.',
  },
  {
    icon: '🎁',
    title: 'Risk and Reward Decisions',
    text: 'Collect now or keep sailing — the choice is always in the player’s hands.',
  },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__visual">
          <img className="about__bg" src={dockBg} alt="" aria-hidden="true" />
          <img className="about__phone" src={phoneMockup} alt="Chicken Royal Road gameplay screen on mobile" />
          <img className="about__badge" src={multiplierBadge} alt="" aria-hidden="true" />
        </div>

        <div className="about__copy">
          <span className="eyebrow">👑 About the Game</span>
          <h2>A royal journey across dangerous waters.</h2>
          <p>
            Meet Chicken Royal Road, an exciting crash-style game that takes players on an
            unpredictable journey across a dangerous ocean.
          </p>
          <p>
            Guide a royal chicken aboard its ship, navigate through challenging obstacles, and
            watch the multiplier increase with every successful step.
          </p>
          <p className="about__highlight">The further the journey goes, the greater the potential reward.</p>

          <ul className="about__features">
            {FEATURES.map((feature) => (
              <li key={feature.title}>
                <span className="about__features-icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
