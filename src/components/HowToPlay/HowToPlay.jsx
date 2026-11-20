import step1 from '../../assets/how-to-play/step-1.webp'
import step2 from '../../assets/how-to-play/step-2.webp'
import step3 from '../../assets/how-to-play/step-3.webp'
import './HowToPlay.css'

const STEPS = [
  { image: step1, alt: 'Step 01 — Choose Your Stake: set your starting stake and prepare your royal ship for the journey ahead.' },
  { image: step2, alt: 'Step 02 — Navigate the Waters: advance through dangerous ocean lanes filled with sharks, pirate ships, and unpredictable obstacles.' },
  { image: step3, alt: 'Step 03 — Collect Your Reward: secure your current result or continue sailing as the multiplier increases with every successful step.' },
]

function HowToPlay() {
  return (
    <section id="how-to-play" className="how-to-play">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">👑 How to Play</span>
          <h2>Three steps. One royal adventure.</h2>
          <p>Discover the simple mechanics behind Chicken Royal Road.</p>
        </div>

        <div className="how-to-play__grid">
          {STEPS.map((step) => (
            <img key={step.alt} className="step-card" src={step.image} alt={step.alt} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToPlay
