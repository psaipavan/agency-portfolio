import { useEffect } from 'react'
import Hero from '../components/Hero'

const WHATSAPP_NUMBER = '919876543210'
const getWA = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ── DATA ── */
const services = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18"/><path d="M9 21V9"/>
            </svg>
        ),
        title: 'UI/UX Design',
        desc: 'Research-driven interfaces with wireframing, prototyping, and pixel-perfect execution that measurably boosts engagement and conversion rates.',
        tag: 'Design',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
            </svg>
        ),
        title: 'Web Development',
        desc: 'High-performance React & Next.js applications with clean architecture, zero technical debt, and 99+ Lighthouse scores on every build.',
        tag: 'Engineering',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
        ),
        title: 'E-Commerce',
        desc: 'Shopify, WooCommerce, or custom storefronts built for revenue — with checkout flow optimisation, upsell logic, and conversion analytics.',
        tag: 'Commerce',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
            </svg>
        ),
        title: 'SEO & Growth',
        desc: 'Data-backed strategies that grow organic traffic month over month — technical SEO, content architecture, and link building with real, lasting ROI.',
        tag: 'Growth',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                <line x1="4" y1="22" x2="4" y2="15"/>
            </svg>
        ),
        title: 'Brand Identity',
        desc: 'Logos, color palettes, typography systems, and brand guidelines that give you a cohesive, professional presence that people remember.',
        tag: 'Branding',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.05 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z"/>
            </svg>
        ),
        title: 'Digital Marketing',
        desc: 'Full-funnel campaigns — PPC, social, email, and content — with transparent reporting dashboards and clear attribution for every rupee spent.',
        tag: 'Marketing',
    },
]

const projects = [
    {
        num: '01',
        tag: 'SaaS Platform',
        category: 'Product Design & Engineering',
        name: 'NovaTech',
        subtitle: 'Enterprise SaaS Redesign',
        desc: 'Complete product overhaul — simplified onboarding, redesigned analytics dashboard, and refactored core. User engagement up 240%, churn cut by 35% in Q1.',
        result: '+240%',
        resultLabel: 'Conversion lift',
        image: '/images/portfolio_saas.png',
        accent: '#8B5CF6',
        layout: 'wide',   // spans full row
    },
    {
        num: '02',
        tag: 'Fintech',
        category: 'Dashboard & Data Viz',
        name: 'FinFlow',
        subtitle: 'Analytics Dashboard',
        desc: 'Real-time financial analytics with AI-powered insights. Performance score: 99.',
        result: '99/100',
        resultLabel: 'Lighthouse score',
        image: '/images/portfolio_fintech.png',
        accent: '#10B981',
        layout: 'half',   // left half
    },
    {
        num: '03',
        tag: 'E-Commerce',
        category: 'Brand & Commerce',
        name: 'Luxe Collective',
        subtitle: 'Luxury Fashion Store',
        desc: 'Premium fashion e-commerce with editorial design. Revenue increased 180% in 3 months.',
        result: '+180%',
        resultLabel: 'Revenue growth',
        image: '/images/portfolio_ecommerce.png',
        accent: '#F59E0B',
        layout: 'half',   // right half
    },
    {
        num: '04',
        tag: 'Growth',
        category: 'Marketing & Conversion',
        name: 'Orbital Lab',
        subtitle: 'Growth Marketing Hub',
        desc: 'A/B-tested landing system with AI lead capture and funnel optimisation. Qualified lead volume tripled in 60 days.',
        result: '3×',
        resultLabel: 'Lead volume',
        image: '/images/portfolio_agency.png',
        accent: '#F43F5E',
        layout: 'wide',   // spans full row
    },
]

const steps = [
    { num: '01', title: 'Discovery', desc: 'We go deep into your goals, audience, competitors, and market dynamics — forming a clear strategy before a single pixel gets placed.' },
    { num: '02', title: 'Design', desc: 'Wireframes, high-fidelity mockups, and interactive prototypes. You approve every detail and direction before development begins.' },
    { num: '03', title: 'Develop', desc: 'Clean, maintainable code built on modern frameworks. Weekly demos keep you in the loop with zero surprises at handover.' },
    { num: '04', title: 'Launch', desc: 'Rigorous QA across all devices, deployment, analytics setup, and 90 days of post-launch support included as standard.' },
]

const testimonials = [
    { initials: 'AK', name: 'Arjun Kumar', role: 'CEO, NovaTech', text: 'Good Will transformed our digital presence completely. Conversion rate jumped 240% in the first quarter. The design quality and code performance are genuinely world-class.' },
    { initials: 'SR', name: 'Sophia Reeves', role: 'Founder, FinFlow', text: 'Delivered ahead of schedule with zero revision cycles. Their process is refreshingly transparent and the results speak for themselves — our Lighthouse score went from 42 to 99.' },
    { initials: 'MP', name: 'Marcus Park', role: 'CMO, Luxe Collective', text: "We've hired five agencies before Good Will. None came anywhere close. They think like business partners, not vendors. Our revenue doubled within 90 days of launch." },
]

const plans = [
    { tier: 'Starter', price: '$2,499', sub: 'One-time payment', featured: false, features: ['5-page responsive website', 'Mobile-first design', 'SEO foundation', 'Google Analytics setup', 'Contact forms & CTAs', '30-day support'], msg: "Hi! I'm interested in the Starter plan ($2,499)." },
    { tier: 'Growth', price: '$5,999', sub: 'Best value', featured: true, features: ['Up to 15 pages', 'Custom animations', 'CMS integration', '90+ Lighthouse scores', 'A/B testing setup', 'E-Commerce ready', '90-day priority support'], msg: "Hi! I'm interested in the Growth plan ($5,999)." },
    { tier: 'Enterprise', price: 'Custom', sub: 'Tailored for scale', featured: false, features: ['Unlimited pages', 'Custom web application', 'Full e-commerce', 'Dedicated PM', 'CI/CD & staging', 'API integrations', 'Ongoing retainer option'], msg: "Hi! I'd like to discuss Enterprise pricing." },
]

const marqueeItems = ['Web Design', 'UI/UX', 'Landing Pages', 'E-Commerce', 'SaaS Platforms', 'Brand Identity', 'SEO', 'Digital Marketing', 'React & Next.js', 'Performance']

function Home() {
    useEffect(() => {
        const obs = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) setTimeout(() => e.target.classList.add('vis'), i * 60)
            })
        }, { threshold: 0.05 })
        document.querySelectorAll('.fi, .fi-left, .fi-right, .fi-scale, .fi-rotate').forEach(el => obs.observe(el))
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

            {/* ══ SERVICES ══ */}
            <section className="sec" id="services">
                <div className="services-header">
                    <div>
                        <div className="sec-label fi-left">Our Services</div>
                        <h2 className="sec-title fi-left">
                            Six ways we<br /><em>grow your business</em>
                        </h2>
                    </div>
                    <p className="sec-desc fi-right">
                        Every service is engineered for measurable business results — not vanity metrics.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map(({ icon, title, desc, tag }, i) => (
                        <div
                            key={title}
                            className="fi-scale service-card-new"
                            style={{ transitionDelay: `${i * 60}ms` }}
                            onClick={() => window.open(getWA(`Hi! Interested in ${title}.`), '_blank')}
                        >
                            <div className="scn-top">
                                <div className="scn-icon">{icon}</div>
                                <span className="scn-tag">{tag}</span>
                            </div>
                            <h3 className="scn-title">{title}</h3>
                            <p className="scn-desc">{desc}</p>
                            <div className="scn-cta">
                                <span>Inquire now</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider" />

            {/* ══ PORTFOLIO ══ */}
            <section className="sec" id="work">
                <div className="port-header">
                    <div>
                        <div className="sec-label fi-left">Portfolio</div>
                        <h2 className="sec-title fi-left" style={{ marginBottom: 8 }}>
                            Selected <em>Work</em>
                        </h2>
                        <p className="sec-desc fi-left" style={{ marginBottom: 0 }}>
                            A selection of projects we're proud of — each one built to drive results.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        onClick={(e) => scrollTo(e, 'contact')}
                        className="btn-glass fi-right"
                        style={{ whiteSpace: 'nowrap', alignSelf: 'flex-end', flexShrink: 0 }}
                    >
                        Start a Project →
                    </a>
                </div>

                {/* Magazine grid */}
                <div className="port-grid">
                    {projects.map(({ num, tag, category, name, subtitle, desc, result, resultLabel, image, accent, layout }, idx) => (
                        <div
                            key={name}
                            className={`fi-rotate port-card port-card--${layout}`}
                            style={{ '--port-accent': accent, transitionDelay: `${idx * 80}ms` }}
                            onClick={() => window.open(getWA(`Hi! I saw "${name}" (${subtitle}) in your portfolio and want something similar.`), '_blank')}
                        >
                            {/* Image layer */}
                            <div className="port-img-wrap">
                                <img src={image} alt={name} className="port-img" />
                                <div className="port-img-overlay" />
                            </div>

                            {/* Top badges */}
                            <div className="port-top">
                                <span className="port-num">{num}</span>
                                <span className="port-tag">{tag}</span>
                            </div>

                            {/* Bottom info */}
                            <div className="port-info">
                                <div className="port-category">{category}</div>
                                <h3 className="port-name">{name}</h3>
                                <p className="port-subtitle">{subtitle}</p>
                                <p className="port-desc">{desc}</p>
                                <div className="port-result">
                                    <span className="port-result-val">{result}</span>
                                    <span className="port-result-lbl">{resultLabel}</span>
                                </div>
                                <div className="port-cta">
                                    <span>Build something similar</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ PROCESS ══ */}
            <section id="process" style={{ background: 'var(--glass)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', backdropFilter: 'blur(12px)' }}>
                <div className="sec">
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
                        <div className="sec-label fi-scale" style={{ justifyContent: 'center' }}>Our Process</div>
                        <h2 className="sec-title fi-scale">
                            From idea to launch<br />
                            <em style={{ fontStyle: 'italic', fontSize: '0.9em' }}>in four clear steps</em>
                        </h2>
                    </div>
                    <div className="process-grid">
                        <div className="process-line" />
                        {steps.map(({ num, title, desc }, i) => (
                            <div key={num} className="fi-scale process-step" style={{ transitionDelay: `${i * 90}ms` }}>
                                <div className="process-num">{num}</div>
                                <h3 className="process-step-title">{title}</h3>
                                <p className="process-step-desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══ TESTIMONIALS ══ */}
            <section className="sec" id="testimonials">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
                    <div className="sec-label fi-scale" style={{ justifyContent: 'center' }}>Client Stories</div>
                    <h2 className="sec-title fi-scale">
                        Don't take our word for it —<br />
                        <em style={{ fontStyle: 'italic' }}>take theirs</em>
                    </h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map(({ initials, name, role, text }, i) => (
                        <div key={name} className="fi-left testimonial-card" style={{ transitionDelay: `${i * 80}ms` }}>
                            <div className="testimonial-quote">"</div>
                            <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                                {[1,2,3,4,5].map(n => (
                                    <svg key={n} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                                ))}
                            </div>
                            <p className="testimonial-text">"{text}"</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div className="testimonial-avatar">{initials}</div>
                                <div>
                                    <div className="testimonial-name">{name}</div>
                                    <div className="testimonial-role">{role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="divider" />

            {/* ══ PRICING ══ */}
            <section className="sec" id="pricing">
                <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 80px)' }}>
                    <div className="sec-label fi-scale" style={{ justifyContent: 'center' }}>Pricing</div>
                    <h2 className="sec-title fi-scale">
                        Transparent, honest<br />
                        <em style={{ fontStyle: 'italic' }}>pricing for real growth</em>
                    </h2>
                    <p className="sec-desc fi-scale" style={{ margin: '16px auto 0' }}>
                        No hidden fees. No surprises. Pick a plan or talk to us for a fully custom quote.
                    </p>
                </div>
                <div className="pricing-grid">
                    {plans.map(({ tier, price, sub, featured, features, msg }, i) => (
                        <div key={tier} className={`fi-scale pricing-card${featured ? ' featured' : ''}`} style={{ transitionDelay: `${i * 70}ms` }}>
                            {featured && <div className="pricing-badge">Most Popular</div>}
                            <div style={{ paddingTop: featured ? 16 : 0 }}>
                                <div className="pricing-tier">{tier}</div>
                                <div className="pricing-price">{price}</div>
                                <div className="pricing-sub">{sub}</div>
                            </div>
                            <ul className="pricing-features">
                                {features.map(f => (
                                    <li key={f}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <circle cx="8" cy="8" r="7.5" stroke="rgba(56,189,248,0.25)" />
                                            <path d="M5 8l2 2 4-4" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={getWA(msg)} target="_blank" rel="noopener noreferrer"
                                className={`pricing-cta${featured ? ' featured-cta' : ''}`}
                            >
                                Get Started on WhatsApp
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* ══ CTA BAND ══ */}
            <div className="cta-band-wrap">
                <div className="fi-scale cta-band">
                    <div className="cta-band-glow" />
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <p className="cta-band-label">Ready to start?</p>
                        <h2 className="cta-band-title">
                            Let's build something<br />
                            <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>extraordinary together</em>
                        </h2>
                        <p className="cta-band-desc">
                            Book a free strategy call. We'll map out exactly what you need to grow — no strings attached.
                        </p>
                        <a href={getWA("Hi! I'd like to book a free strategy call.")} target="_blank" rel="noopener noreferrer" className="btn-accent cta-band-btn">
                            Book a Free Call
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
