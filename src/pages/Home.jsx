import { useEffect } from 'react'
import Hero from '../components/Hero'

const services = [
    { icon: '🎨', title: 'UI/UX Design', desc: 'Conversion-focused interfaces crafted with deep user research and battle-tested design principles.' },
    { icon: '⚡', title: 'Web Development', desc: 'Blazing-fast websites built with modern tech. Perfect Lighthouse scores, clean code, zero compromise.' },
    { icon: '🛒', title: 'E-Commerce', desc: 'Online stores engineered to sell. From Shopify to custom builds — we optimize every step of the funnel.' },
    { icon: '📊', title: 'Landing Pages', desc: 'High-converting pages that turn visitors into leads. A/B tested and data-driven by default.' },
    { icon: '🚀', title: 'SaaS Websites', desc: 'Marketing sites that communicate complex products clearly and drive trial signups at scale.' },
    { icon: '✦', title: 'Brand & Motion', desc: 'Visual identity systems and motion design that make your brand impossible to forget.' },
]

const work = [
    { tag: 'SaaS · Web Design', name: 'TechLaunch — Platform Redesign', bg: 'linear-gradient(135deg,#0e0e22,#131330)', span: 7, ratio: '7/4' },
    { tag: 'Fintech · Dashboard', name: 'Vaultify — Finance App', bg: 'linear-gradient(160deg,#0a0a1e,#14102a)', span: 5, ratio: '5/4' },
    { tag: 'E-Commerce · Brand', name: 'Lumis — Luxury Store', bg: 'linear-gradient(135deg,#0c1220,#0a1a18)', span: 4, ratio: '4/3' },
    { tag: 'Agency · Landing Page', name: 'Orbital — Growth Agency', bg: 'linear-gradient(100deg,#100e22,#0a1822,#160e1e)', span: 8, ratio: '8/3' },
]

const steps = [
    { n: '01', t: 'Discovery', d: 'Deep dive into your goals, audience, and competitors. We map the strategy before touching design.' },
    { n: '02', t: 'Design', d: 'Wireframes, moodboards, and high-fidelity prototypes. You approve every pixel before we build.' },
    { n: '03', t: 'Build', d: 'Clean, semantic code with performance built in from day one. Weekly updates, zero surprises.' },
    { n: '04', t: 'Launch', d: 'QA tested across all devices and browsers. Launch with confidence — 90-day support included.' },
]

const testimonials = [
    { av: 'AK', name: 'Arjun Kumar', role: 'CEO, TechLaunch', text: '"NEXUS completely transformed our online presence. Conversion rate jumped 180% in the first month. The design is stunning and the code is immaculate."' },
    { av: 'SR', name: 'Sophia Reeves', role: 'Founder, Vaultify', text: '"Delivered ahead of schedule with zero revisions needed. Their process is airtight and the results speak for themselves. Page speed went from 62 to 98."' },
    { av: 'MP', name: 'Marcus Park', role: 'CMO, Lumis', text: '"We\'ve worked with 4 agencies before NEXUS. None came close. They don\'t just execute — they think like business partners and care about our growth."' },
]

const plans = [
    {
        tier: 'Starter', price: '$2,499', sub: 'One-time payment', featured: false,
        features: ['5-page custom website', 'Mobile responsive', 'SEO foundation', 'Analytics setup', '30-day support'],
        cta: 'Get Started',
    },
    {
        tier: 'Growth', price: '$5,999', sub: 'One-time payment', featured: true, badge: 'Most Popular',
        features: ['Up to 15 pages', 'Custom animations', 'CMS integration', 'Performance optimization', 'A/B testing setup', '90-day support'],
        cta: 'Get Started',
    },
    {
        tier: 'Enterprise', price: 'Custom', sub: 'Tailored to your needs', featured: false,
        features: ['Unlimited pages', 'Custom web application', 'E-commerce platform', 'Priority development', 'Dedicated project manager', 'Ongoing retainer option'],
        cta: 'Book a Call',
    },
]

const marqueeItems = ['Web Design', 'Landing Pages', 'E-Commerce', 'SaaS Products', 'Brand Identity', 'UI/UX Design', 'Conversion Optimization']

function Home() {
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 90)
            })
        }, { threshold: 0.12 })
        document.querySelectorAll('.fi').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <>
            <Hero />

            {/* ── MARQUEE ── */}
            <div className="marquee-wrap">
                <div className="marquee-track">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="marquee-item">{item}</span>
                    ))}
                </div>
            </div>

            {/* ── SERVICES ── */}
            <section className="sec" id="services">
                <div className="sec-tag">What We Do</div>
                <div className="sec-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 32 }}>
                    <h2 className="sec-h2" style={{ marginBottom: 0 }}>Services Built<br /><em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: '0.88em', letterSpacing: 1 }}>for Growth</em></h2>
                    <p className="sec-sub" style={{ maxWidth: 460, marginBottom: 0 }}>Every service we offer is engineered to deliver measurable results — not just beautiful pixels.</p>
                </div>
                <div className="grid-3" style={{ marginTop: 100 }}>
                    {services.map(({ icon, title, desc }) => (
                        <div key={title} className="glass-card fi" style={{
                            padding: '64px 48px', borderRadius: 28,
                            transition: 'background .3s, border-color .3s, transform .3s', cursor: 'pointer',
                        }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'var(--glass-hv)'; e.currentTarget.style.borderColor = 'var(--border-hv)'; e.currentTarget.style.transform = 'translateY(-8px)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                        >
                            <div style={{
                                width: 72, height: 72, borderRadius: 20,
                                background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 32, marginBottom: 32,
                            }}>{icon}</div>
                            <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 26, fontWeight: 600, marginBottom: 16, letterSpacing: 0.2 }}>{title}</div>
                            <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.8 }}>{desc}</p>
                            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 32, fontSize: 16, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color .2s, gap .2s' }}>Learn more →</a>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider" />

            {/* ── WORK ── */}
            <section className="sec" id="work">
                <div className="sec-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
                    <div>
                        <div className="sec-tag">Selected Work</div>
                        <h2 className="sec-h2" style={{ marginBottom: 0 }}>Results That Speak</h2>
                    </div>
                    <a href="#contact" className="btn-glass">View All Projects →</a>
                </div>
                <div className="grid-12">
                    {work.map(({ tag, name, bg, span, ratio }) => (
                        <div key={name} style={{ gridColumn: `span ${span}`, aspectRatio: ratio, borderRadius: 20, overflow: 'hidden', position: 'relative', cursor: 'pointer', minHeight: 200 }}
                            onMouseEnter={e => {
                                e.currentTarget.querySelector('.wi-thumb').style.transform = 'scale(1.04)'
                                e.currentTarget.querySelector('.wi-overlay').style.opacity = '1'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.querySelector('.wi-thumb').style.transform = 'scale(1)'
                                e.currentTarget.querySelector('.wi-overlay').style.opacity = '0'
                            }}
                        >
                            <div className="wi-thumb" style={{
                                position: 'absolute', inset: 0, transition: 'transform .5s ease',
                                background: bg, border: '1px solid var(--border)',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <div style={{
                                    position: 'absolute', inset: 0,
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
                                }} />
                            </div>
                            <div className="wi-overlay" style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(6,6,16,0.85) 0%, transparent 60%)',
                                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 48,
                                opacity: 0, transition: 'opacity .3s',
                            }}>
                                <div style={{ fontSize: 18, letterSpacing: 2.5, textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 8 }}>{tag}</div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 32, fontWeight: 600 }}>{name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROCESS ── */}
            <div style={{ background: 'rgba(255,255,255,0.015)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} id="process">
                <div className="sec">
                    <div className="sec-tag">Our Process</div>
                    <h2 className="sec-h2">From Idea to<br />Launch in 4 Steps</h2>
                    <div className="grid-4" style={{ marginTop: 100, position: 'relative' }}>
                        <div className="process-line" style={{
                            position: 'absolute', top: 40, left: '12%', right: '12%', height: 1,
                            background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), rgba(255,255,255,0.15), transparent)',
                        }} />
                        {steps.map(({ n, t, d }) => (
                            <div key={n} className="fi" style={{ textAlign: 'center', padding: '0 32px' }}>
                                <div style={{
                                    width: 80, height: 80, borderRadius: '50%', margin: '0 auto 40px',
                                    background: 'var(--glass)', border: '1px solid var(--border)',
                                    backdropFilter: 'blur(12px)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: "'Bebas Neue',cursive", fontWeight: 400, fontSize: 32, letterSpacing: 2,
                                    position: 'relative',
                                }}>
                                    {n}
                                    <div style={{
                                        position: 'absolute', inset: -1, borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)',
                                        pointerEvents: 'none',
                                    }} />
                                </div>
                                <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 24, fontWeight: 600, marginBottom: 16, letterSpacing: 0.3 }}>{t}</div>
                                <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.8 }}>{d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── TESTIMONIALS ── */}
            <section className="sec">
                <div className="sec-tag">Social Proof</div>
                <h2 className="sec-h2">Clients Love<br />Working With Us</h2>
                <div className="grid-3" style={{ marginTop: 100 }}>
                    {testimonials.map(({ av, name, role, text }) => (
                        <div key={name} className="glass-card fi" style={{ padding: 56, borderRadius: 28, position: 'relative', overflow: 'hidden' }}>
                            <div style={{
                                position: 'absolute', top: 16, right: 32,
                                fontSize: 140, lineHeight: 1, fontFamily: "'Bebas Neue',cursive",
                                color: 'rgba(255,255,255,0.03)', pointerEvents: 'none',
                            }}>"</div>
                            <div style={{ fontSize: 20, letterSpacing: 4, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>★ ★ ★ ★ ★</div>
                            <p style={{ fontSize: 20, lineHeight: 1.8, color: 'rgba(255,255,255,0.7)', marginBottom: 40 }}>{text}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                <div style={{
                                    width: 64, height: 64, borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.08)', border: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: "'Bebas Neue',cursive", fontWeight: 700, fontSize: 20, color: 'var(--muted)',
                                }}>{av}</div>
                                <div>
                                    <div style={{ fontSize: 20, fontWeight: 600, letterSpacing: 0.2 }}>{name}</div>
                                    <div style={{ fontSize: 16, color: 'var(--muted)' }}>{role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider" />

            {/* ── PRICING ── */}
            <section className="sec" id="pricing">
                <div className="sec-tag">Investment</div>
                <h2 className="sec-h2">Transparent Pricing,<br />Real Results</h2>
                <div className="grid-3" style={{ marginTop: 100 }}>
                    {plans.map(({ tier, price, sub, featured, badge, features, cta }) => (
                        <div key={tier} className="glass-card fi" style={{
                            padding: 64, borderRadius: 32, position: 'relative', overflow: 'hidden',
                            transition: 'transform .3s',
                            display: 'flex', flexDirection: 'column',
                            ...(featured ? {
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 40px 80px rgba(0,0,0,0.3)',
                            } : {}),
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {badge && (
                                <div style={{
                                    position: 'absolute', top: 32, right: 32,
                                    padding: '8px 20px', borderRadius: 100,
                                    background: 'rgba(255,255,255,0.1)', border: '1px solid var(--border)',
                                    fontSize: 14, letterSpacing: 1.5, color: 'var(--muted)',
                                }}>{badge}</div>
                            )}
                            <div style={{ fontSize: 16, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>{tier}</div>
                            <div style={{ fontFamily: "'Bebas Neue',cursive", fontSize: 80, fontWeight: 400, letterSpacing: 3, lineHeight: 1, marginBottom: 12 }}>
                                {price.startsWith('$') ? <><sup style={{ fontSize: 36, fontWeight: 600, opacity: 0.6 }}>$</sup>{price.slice(1)}</> : price}
                            </div>
                            <div style={{ fontSize: 18, color: 'var(--muted)', marginBottom: 48 }}>{sub}</div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 48, flexGrow: 1 }}>
                                {features.map(f => (
                                    <li key={f} style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 16 }}>
                                        <span style={{ fontWeight: 700, fontSize: 16, color: 'rgba(255,255,255,0.5)' }}>✓</span>{f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" style={{
                                width: '100%', padding: 22, borderRadius: 100, cursor: 'pointer',
                                display: 'block', textAlign: 'center', fontFamily: "'Outfit',sans-serif",
                                fontSize: 18, textDecoration: 'none', transition: 'background .2s, border-color .2s',
                                ...(featured ? {
                                    background: 'rgba(255,255,255,0.95)', color: '#080818', border: 'none', fontWeight: 600,
                                } : {
                                    background: 'var(--glass)', border: '1px solid var(--border)', color: 'var(--white)', fontWeight: 500,
                                    backdropFilter: 'blur(10px)',
                                }),
                            }}
                                onMouseEnter={e => { e.currentTarget.style.background = featured ? '#fff' : 'var(--glass-hv)'; }}
                                onMouseLeave={e => { e.currentTarget.style.background = featured ? 'rgba(255,255,255,0.95)' : 'var(--glass)'; }}
                            >{cta}</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home
