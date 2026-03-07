const services = [
    {
        icon: 'laptop',
        title: 'Web Design & Development',
        desc: 'From landing pages to full-scale web apps, we build fast, beautiful, and accessible sites that perform.',
        features: ['Responsive Design', 'React / Next.js', 'Performance Optimised', 'CMS Integration'],
    },
    {
        icon: 'brush',
        title: 'Branding & Identity',
        desc: 'Logos, color systems, typography, and brand guidelines that make your business instantly recognisable.',
        features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Social Kits'],
    },
    {
        icon: 'graph-up-arrow',
        title: 'Digital Marketing',
        desc: 'Strategic campaigns across search, social, and email that generate real business results.',
        features: ['Google Ads', 'Social Media', 'Email Campaigns', 'Analytics'],
    },
    {
        icon: 'search',
        title: 'SEO Strategy',
        desc: 'Technical SEO, content strategy, and link building that earns top rankings and sustained organic traffic.',
        features: ['Technical SEO', 'Content Strategy', 'Keyword Research', 'Reporting'],
    },
    {
        icon: 'phone-landscape',
        title: 'UI/UX Design',
        desc: 'Research-backed interfaces and prototypes that delight users and reduce friction across every touchpoint.',
        features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
    },
    {
        icon: 'gear',
        title: 'Maintenance & Support',
        desc: 'Ongoing support, updates, and monitoring so your digital products run smoothly 24/7.',
        features: ['Monthly Updates', 'Bug Fixes', 'Performance Monitoring', '24h Support'],
    },
]

function Services() {
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
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="section-subtitle mx-auto">
                        Everything your business needs to thrive online — under one roof.
                    </p>
                </div>
            </section>

            {/* Services grid */}
            <section className="section-padding" style={{ background: 'var(--dark-2)' }}>
                <div className="container">
                    <div className="row g-4">
                        {services.map(({ icon, title, desc, features }) => (
                            <div className="col-md-6 col-lg-4" key={title}>
                                <div className="glass-card p-4 h-100 d-flex flex-column">
                                    <div
                                        className="mb-3 d-flex align-items-center justify-content-center"
                                        style={{ width: 52, height: 52, borderRadius: 12, background: 'rgba(108,71,255,0.15)' }}
                                    >
                                        <i className={`bi bi-${icon} fs-4`} style={{ color: '#6c47ff' }} />
                                    </div>
                                    <h5 className="fw-bold mb-2">{title}</h5>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{desc}</p>
                                    <ul className="list-unstyled mt-auto d-flex flex-column gap-1">
                                        {features.map((f) => (
                                            <li key={f} className="d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                                <i className="bi bi-check-circle-fill" style={{ color: '#00d4aa' }} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
