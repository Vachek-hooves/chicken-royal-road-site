import { useState } from 'react'
import contactSide from '../../assets/contact/contact-side.webp'
import { CONTACT_FORM_ENDPOINT } from '../../config/site'
import './ContactForm.css'

const INITIAL_STATE = {
  fullName: '',
  businessEmail: '',
  companyName: '',
  jobPosition: '',
  companyWebsite: '',
  message: '',
}

const PARTNER_TYPES = ['Operators & online casinos', 'Aggregators & distributors', 'Commercial partnerships']

function ContactForm() {
  const [values, setValues] = useState(INITIAL_STATE)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')

    if (!CONTACT_FORM_ENDPOINT) {
      // Mock mode: no backend wired up yet — simulate a request so the UI/UX
      // can be reviewed end to end. Swap CONTACT_FORM_ENDPOINT in src/config/site.js
      // once a real form handler (Formspree, your own API, etc.) is ready.
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus('success')
      return
    }

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(INITIAL_STATE)
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form__success">
        <span className="contact-form__success-icon">✓</span>
        <h3>Inquiry sent</h3>
        <p>Thanks for reaching out — our partnerships team will get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Sales Inquiry</h3>
      <p className="contact-form__hint">
        Fields marked with <span className="contact-form__required">*</span> are required.
      </p>

      <div className="contact-form__row">
        <label>
          Full Name <span className="contact-form__required">*</span>
          <input
            type="text"
            name="fullName"
            placeholder="Jane Cooper"
            required
            value={values.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Business Email <span className="contact-form__required">*</span>
          <input
            type="email"
            name="businessEmail"
            placeholder="jane@company.com"
            required
            value={values.businessEmail}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="contact-form__row">
        <label>
          Company Name <span className="contact-form__required">*</span>
          <input
            type="text"
            name="companyName"
            placeholder="Your company"
            required
            value={values.companyName}
            onChange={handleChange}
          />
        </label>
        <label>
          Job Position
          <input
            type="text"
            name="jobPosition"
            placeholder="e.g. Head of Content"
            value={values.jobPosition}
            onChange={handleChange}
          />
        </label>
      </div>

      <label>
        Company Website
        <input
          type="text"
          name="companyWebsite"
          placeholder="company.com"
          value={values.companyWebsite}
          onChange={handleChange}
        />
      </label>

      <label>
        Message <span className="contact-form__required">*</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your platform, markets, and what you'd like to discuss."
          required
          value={values.message}
          onChange={handleChange}
        />
      </label>

      <div className="contact-form__footer">
        <p className="contact-form__consent">
          By submitting, you agree to be contacted about Chicken Royal Road partnerships.
        </p>
        <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Inquiry →'}
        </button>
      </div>

      {status === 'error' && (
        <p className="contact-form__error">Something went wrong. Please try again or email us directly.</p>
      )}
    </form>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__copy">
          <span className="eyebrow">👑 Contact Sales</span>
          <h2>
            Bring Chicken Royal Road to <span className="contact__accent">your platform.</span>
          </h2>
          <p>Interested in adding Chicken Royal Road to your gaming portfolio?</p>
          <p>Our team is ready to discuss partnership opportunities and provide more information about the game.</p>

          <ul className="contact__list">
            {PARTNER_TYPES.map((item) => (
              <li key={item}>
                <span className="contact__check" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <img className="contact__side-image" src={contactSide} alt="" aria-hidden="true" />
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
