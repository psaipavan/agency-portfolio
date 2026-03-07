const team = [
    { name: 'Alex Rivera', role: 'Founder & Creative Director', icon: 'person-circle' },
    { name: 'Priya Sharma', role: 'Lead Developer', icon: 'person-circle' },
    { name: 'James Okafor', role: 'Brand Strategist', icon: 'person-circle' },
]

function About() {
    return (
        <div style={{ paddingTop: 80 }}>
            {/* Hero */}
            <section
                className="section-padding text-center"
                style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(108,71,255,0.25) 0%, transparent 70%), var(--dark)`,
                }}
            >
                <div className="container">
                    <h1 className="section-title display-4">
                        About <span className="gradient-text">Good Will</span>
                    </h1>
                    <p className="section-subtitle mx-auto">
                        We are a passionate team of creators, strategists, and engineers on a mission
                        to build digital products that make a real difference.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-padding" style={{ background: 'var(--dark-2)' }}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h2 className="fw-bold mb-4">Our <span className="gradient-text">Story</span></h2>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9 }}>
                                Founded with a simple belief — that great design and smart technology should be
                                accessible to every business — Good Will Agency has grown from a two-person studio
                                to a full-service digital agency trusted by clients around the world.
                            </p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginTop: '1rem' }}>
                                We combine creativity with data to deliver outcomes that matter: more traffic,
                                better engagement, and measurable growth.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                {[
                                    { icon: 'lightbulb', label: 'Innovation First' },
                                    { icon: 'shield-check', label: 'Quality Assured' },
                                    { icon: 'people', label: 'Client Focused' },
                                    { icon: 'bar-chart-line', label: 'Results Driven' },
                                ].map(({ icon, label }) => (
                                    <div className="col-6" key={label}>
                                        <div className="glass-card p-4 text-center">
                                            <i className={`bi bi-${icon} fs-2 mb-2 d-block`} style={{ color: '#6c47ff' }} />
                                            <span className="fw-semibold">{label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Meet the <span className="gradient-text">Team</span></h2>
                    </div>
                    <div className="row justify-content-center g-4">
                        {team.map(({ name, role, icon }) => (
                            <div className="col-md-4" key={name}>
                                <div className="glass-card p-4 text-center">
                                    <i className={`bi bi-${icon}`} style={{ fontSize: '4rem', color: '#6c47ff' }} />
                                    <h5 className="fw-bold mt-3 mb-1">{name}</h5>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
