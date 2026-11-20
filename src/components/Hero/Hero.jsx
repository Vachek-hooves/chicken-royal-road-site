import { useState } from 'react'
import heroBg from '../../assets/hero/hero-bg.webp'
import mascot from '../../assets/hero/mascot.webp'
import VideoModal from '../VideoModal/VideoModal'
import { TRAILER_YOUTUBE_ID } from '../../config/site'
import './Hero.css'

function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="top" className="hero">
      <img className="hero__bg" src={heroBg} alt="" aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">The Next Chicken Adventure</span>
          <h1 className="hero__title">
            <span className="hero__title-line">Chicken</span>
            <span className="hero__title-line hero__title-line--accent">Royal Road</span>
          </h1>
          <p className="hero__subtitle">The ocean is yours to conquer.</p>
          <p className="hero__text">
            Embark on a thrilling crash-style adventure across dangerous waters. Navigate
            unpredictable obstacles, increase your multiplier, and decide when to claim your
            reward.
          </p>

          <div className="hero__actions">
            {TRAILER_YOUTUBE_ID ? (
              <button type="button" className="btn btn-primary" onClick={() => setVideoOpen(true)}>
                ▶ Play Demo
              </button>
            ) : (
              <a className="btn btn-primary" href="#how-to-play">
                ▶ Play Demo
              </a>
            )}
            <a className="btn btn-dark" href="#contact">
              Contact Sales
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <img src={mascot} alt="Chicken Royal Road king mascot looking through a spyglass" />
        </div>
      </div>

      {videoOpen && <VideoModal youtubeId={TRAILER_YOUTUBE_ID} onClose={() => setVideoOpen(false)} />}
    </section>
  )
}

export default Hero
