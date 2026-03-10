import { useState } from 'react'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: wire up your form submission API here
        setSubmitted(true)
    }

    return (
        <div style={{ paddingTop: 80 }}>
            {/* Header */}
            <section
                className="section-padding text-center"
                style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(108,71,255,0.25) 0%, transparent 70%), var(--dark)`,
                }}
            >
                <div className="container">
                    <h1 className="section-title display-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="section-subtitle mx-auto">
                        Ready to start your project? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding" style={{ background: 'var(--dark-2)' }}>
                <div className="container">
                    <div className="row g-5 justify-content-center">
                        {/* Info */}
                        <div className="col-lg-4">
                            <h4 className="fw-bold mb-4">Let's Work Together</h4>
                            {[
                                { icon: 'envelope', label: 'Email', value: 'hello@goodwill.agency' },
                                { icon: 'telephone', label: 'Phone', value: '+91 00000 00000' },
                                { icon: 'geo-alt', label: 'Location', value: 'India (Remote Worldwide)' },
                            ].map(({ icon, label, value }) => (
                                <div className="d-flex align-items-start gap-3 mb-4" key={label}>
                                    <div
                                        style={{
                                            width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                                            background: 'rgba(108,71,255,0.15)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}
                                    >
                                        <i className={`bi bi-${icon}`} style={{ color: '#6c47ff' }} />
                                    </div>
                                    <div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{label}</div>
                                        <div className="fw-semibold" style={{ color: '#fff' }}>{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Form */}
                        <div className="col-lg-7">
                            {submitted ? (
                                <div
                                    className="glass-card p-5 text-center"
                                    style={{ borderColor: 'rgba(0,212,170,0.3)' }}
                                >
                                    <i className="bi bi-check-circle-fill fs-1 mb-3 d-block" style={{ color: '#00d4aa' }} />
                                    <h4 className="fw-bold mb-2">Message Sent!</h4>
                                    <p style={{ color: 'var(--text-muted)' }}>
                                        Thanks for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form className="glass-card p-4 p-md-5" onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold" htmlFor="name">Name</label>
                                            <input
                                                id="name" name="name" type="text"
                                                className="form-control border-0"
                                                placeholder="Your name"
                                                value={form.name}
                                                onChange={handleChange}
                                                required
                                                style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: 8 }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold" htmlFor="email">Email</label>
                                            <input
                                                id="email" name="email" type="email"
                                                className="form-control border-0"
                                                placeholder="your@email.com"
                                                value={form.email}
                                                onChange={handleChange}
                                                required
                                                style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: 8 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold" htmlFor="service">Service Interested In</label>
                                            <select
                                                id="service" name="service"
                                                className="form-select border-0"
                                                value={form.service}
                                                onChange={handleChange}
                                                style={{ background: 'rgba(255,255,255,0.05)', color: '#c8c8e8', borderRadius: 8 }}
                                            >
                                                <option value="">Select a service…</option>
                                                <option>Web Design &amp; Development</option>
                                                <option>Branding &amp; Identity</option>
                                                <option>Digital Marketing</option>
                                                <option>SEO Strategy</option>
                                                <option>UI/UX Design</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label fw-semibold" htmlFor="message">Message</label>
                                            <textarea
                                                id="message" name="message"
                                                className="form-control border-0"
                                                rows={5}
                                                placeholder="Tell us about your project…"
                                                value={form.message}
                                                onChange={handleChange}
                                                required
                                                style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: 8, resize: 'vertical' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary-custom w-100 py-3">
                                                Send Message <i className="bi bi-send ms-2" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
