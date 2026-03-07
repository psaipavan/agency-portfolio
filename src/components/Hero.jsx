import { Link } from 'react-router-dom'

function Hero() {
    return (
        <section
            className="d-flex align-items-center"
            style={{
                minHeight: '100vh',
                background: `
          radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,71,255,0.3) 0%, transparent 70%),
          var(--dark)
        `,
                paddingTop: '100px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background orbs */}
            <div
                style={{
                    position: 'absolute', top: '20%', right: '-5%',
                    width: 400, height: 400,
                    background: 'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute', bottom: '10%', left: '-5%',
                    width: 300, height: 300,
                    background: 'radial-gradient(circle, rgba(108,71,255,0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    pointerEvents: 'none',
                }}
            />

            <div className="container text-center position-relative" style={{ zIndex: 2 }}>
                {/* Badge */}
                <div
                    className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2"
                    style={{
                        background: 'rgba(108,71,255,0.12)',
                        border: '1px solid rgba(108,71,255,0.3)',
                        borderRadius: 99,
                        color: '#a78bff',
                        fontSize: '0.85rem',
                    }}
                >
                    <span
                        style={{
                            width: 8, height: 8, borderRadius: '50%',
                            background: '#6c47ff',
                            boxShadow: '0 0 8px #6c47ff',
                            animation: 'pulse 2s infinite',
                        }}
                    />
                    Available for new projects
                </div>

                <h1
                    className="display-2 fw-bold mb-4"
                    style={{ lineHeight: 1.1 }}
                >
                    We Build Digital{' '}
                    <span className="gradient-text">Experiences</span>
                    <br /> That Inspire
                </h1>

                <p
                    className="lead mb-5 mx-auto"
                    style={{ color: 'var(--text-muted)', maxWidth: 580 }}
                >
                    Good Will Agency delivers world-class web design, branding, and digital marketing
                    solutions to help your business stand out and grow.
                </p>

                <div className="d-flex justify-content-center flex-wrap gap-3">
                    <Link to="/portfolio" className="btn btn-primary-custom px-4 py-3">
                        <i className="bi bi-grid-3x3-gap me-2" />
                        View Our Work
                    </Link>
                    <Link to="/contact" className="btn btn-outline-custom px-4 py-3">
                        Start a Project
                        <i className="bi bi-arrow-right ms-2" />
                    </Link>
                </div>

                {/* Stats */}
                <div className="row justify-content-center g-4 mt-5">
                    {[
                        { value: '50+', label: 'Projects Delivered' },
                        { value: '98%', label: 'Client Satisfaction' },
                        { value: '5+', label: 'Years Experience' },
                    ].map(({ value, label }) => (
                        <div className="col-4 col-md-2" key={label}>
                            <div
                                className="glass-card p-3"
                                style={{ borderRadius: 12, textAlign: 'center' }}
                            >
                                <div
                                    className="fw-bold"
                                    style={{
                                        fontSize: '1.8rem',
                                        background: 'linear-gradient(135deg, #6c47ff, #00d4aa)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {value}
                                </div>
                                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero
