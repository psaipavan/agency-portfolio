import { useState } from 'react'

const categories = ['All', 'Web', 'Branding', 'Marketing']

const projects = [
    { title: 'Nexus SaaS Platform', category: 'Web', tags: ['React', 'Node.js'], color: '#6c47ff' },
    { title: 'Bloom Brand Identity', category: 'Branding', tags: ['Logo', 'Guidelines'], color: '#00d4aa' },
    { title: 'Spark E-Commerce', category: 'Web', tags: ['Shopify', 'UX'], color: '#ff6b6b' },
    { title: 'Verde Campaign', category: 'Marketing', tags: ['SEO', 'Ads'], color: '#ffd166' },
    { title: 'Aura Design System', category: 'Branding', tags: ['UI Kit', 'Figma'], color: '#a78bff' },
    { title: 'Pulse Analytics App', category: 'Web', tags: ['React', 'Charts'], color: '#06d6a0' },
]

function Portfolio() {
    const [active, setActive] = useState('All')
    const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

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
                        Our <span className="gradient-text">Portfolio</span>
                    </h1>
                    <p className="section-subtitle mx-auto">
                        A selection of projects we are proud of.
                    </p>

                    {/* Filter tabs */}
                    <div className="d-flex justify-content-center gap-2 flex-wrap mt-4">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className="btn"
                                style={{
                                    borderRadius: 99,
                                    padding: '8px 22px',
                                    fontSize: '0.9rem',
                                    background: active === cat ? 'var(--primary)' : 'rgba(108,71,255,0.1)',
                                    color: active === cat ? '#fff' : 'var(--text-muted)',
                                    border: `1px solid ${active === cat ? 'var(--primary)' : 'var(--border)'}`,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="section-padding" style={{ background: 'var(--dark-2)' }}>
                <div className="container">
                    <div className="row g-4">
                        {filtered.map(({ title, category, tags, color }) => (
                            <div className="col-md-6 col-lg-4" key={title}>
                                <div className="glass-card h-100 overflow-hidden" style={{ cursor: 'pointer' }}>
                                    {/* Placeholder thumbnail */}
                                    <div
                                        style={{
                                            height: 180,
                                            background: `linear-gradient(135deg, ${color}22, ${color}44)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderBottom: `1px solid ${color}33`,
                                        }}
                                    >
                                        <i className="bi bi-image" style={{ fontSize: '3rem', color: `${color}88` }} />
                                    </div>
                                    <div className="p-4">
                                        <div className="d-flex flex-wrap gap-2 mb-2">
                                            {tags.map((t) => (
                                                <span
                                                    key={t}
                                                    style={{
                                                        fontSize: '0.75rem',
                                                        background: `${color}18`,
                                                        color: color,
                                                        border: `1px solid ${color}33`,
                                                        borderRadius: 99,
                                                        padding: '2px 10px',
                                                    }}
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <h5 className="fw-bold mb-1">{title}</h5>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{category}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portfolio
