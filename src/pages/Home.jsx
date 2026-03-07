import Hero from '../components/Hero'
import { Link } from 'react-router-dom'

const services = [
    { icon: 'laptop', title: 'Web Design', desc: 'Stunning, responsive websites built to convert visitors into customers.' },
    { icon: 'brush', title: 'Branding', desc: 'Memorable brand identities that communicate your unique story.' },
    { icon: 'graph-up-arrow', title: 'Digital Marketing', desc: 'Data-driven campaigns that grow your reach and revenue.' },
    { icon: 'phone-landscape', title: 'Mobile-First UI', desc: 'Pixel-perfect interfaces optimised for every screen size.' },
    { icon: 'search', title: 'SEO Strategy', desc: 'Higher rankings, more traffic, and qualified leads.' },
    { icon: 'stars', title: 'UI/UX Consulting', desc: 'User-centric experiences backed by research and testing.' },
]

function Home() {
    return (
        <>
            <Hero />

            {/* Services snapshot */}
            <section className="section-padding" style={{ background: 'var(--dark-2)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">What We <span className="gradient-text">Do</span></h2>
                        <p className="section-subtitle">
                            End-to-end digital solutions tailored to your goals.
                        </p>
                    </div>
                    <div className="row g-4">
                        {services.map(({ icon, title, desc }) => (
                            <div className="col-md-6 col-lg-4" key={title}>
                                <div className="glass-card p-4 h-100">
                                    <div
                                        className="mb-3 d-flex align-items-center justify-content-center"
                                        style={{
                                            width: 52, height: 52, borderRadius: 12,
                                            background: 'rgba(108,71,255,0.15)',
                                        }}
                                    >
                                        <i className={`bi bi-${icon} fs-4`} style={{ color: '#6c47ff' }} />
                                    </div>
                                    <h5 className="fw-bold mb-2">{title}</h5>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0 }}>{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/services" className="btn btn-primary-custom px-4 py-3">
                            Explore All Services <i className="bi bi-arrow-right ms-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="section-padding">
                <div className="container">
                    <div
                        className="text-center p-5"
                        style={{
                            background: 'linear-gradient(135deg, rgba(108,71,255,0.2), rgba(0,212,170,0.1))',
                            border: '1px solid rgba(108,71,255,0.25)',
                            borderRadius: 24,
                        }}
                    >
                        <h2 className="section-title">Ready to grow your <span className="gradient-text">business?</span></h2>
                        <p className="lead mb-4" style={{ color: 'var(--text-muted)' }}>
                            Let's build something great together.
                        </p>
                        <Link to="/contact" className="btn btn-primary-custom px-5 py-3">
                            Start a Project <i className="bi bi-rocket-takeoff ms-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
