import { Section, SectionTitle, FadeIn } from './SectionUtils'

const projects = [
  {
    id: '01',
    name: 'EdraFlow',
    tagline: 'AI-Powered Full-Stack Platform with RAG',
    period: 'Feb 2026 – Present',
    stack: ['MERN', 'FastAPI', 'LangChain', 'FAISS', 'JWT', 'MongoDB Atlas', 'Cloudinary'],
    color: 'var(--green)',
    points: [
      'Engineered a scalable full-stack platform enabling students to upload and share educational PDF resources through an admin-approved public library system.',
      'Built EdraChat — an AI-powered RAG assistant using FastAPI, LangChain, and FAISS to help students understand official college procedures.',
      'Developed secure RESTful APIs with JWT-based authentication, authorization, and content moderation workflows.',
      'Integrated MongoDB Atlas, Cloudinary, Vercel, and Render for scalable deployment and cloud storage.',
    ],
    links: { demo: 'https://edra-flow-v2-0-r5yazoe17-akashsingh040s-projects.vercel.app', code: 'https://github.com/AkashSingh040/EdraFlow_V2.0' },
    featured: true,
  },
  {
    id: '02',
    name: 'ToxicityInsight',
    tagline: 'Real-Time Content Moderation API',
    period: 'Dec 2025 – Jan 2026',
    stack: ['FastAPI', 'Scikit-Learn', 'NLP', 'TF-IDF', 'Logistic Regression'],
    color: 'var(--teal)',
    points: [
      'Developed an ML classification pipeline using Logistic Regression and TF-IDF vectorization for NLP-based toxicity detection.',
      'Classified text into Hate, Offensive, and Neutral categories using optimized preprocessing and feature engineering.',
      'Improved model performance through class imbalance handling and weighted training optimization.',
      'Built asynchronous FastAPI backend enabling scalable real-time inference and low-latency API responses.',
    ],
    links: { code: 'https://github.com/AkashSingh040/ToxicityInsight' },
    featured: false,
  },
]

export default function Projects() {
  return (
    <Section id="projects">
      <SectionTitle number="03" title="Projects" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.1}>
            <div style={{
              border: '1px solid var(--border2)',
              borderRadius: '10px',
              overflow: 'hidden',
              background: 'rgba(0,0,0,0.2)',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = p.color + '40'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border2)'}
            >
              {/* Top bar */}
              <div style={{
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--border2)',
                background: 'rgba(0,0,0,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                flexWrap: 'wrap', gap: '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Terminal dots */}
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                      <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
                    ))}
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)',
                  }}>~/projects/{p.name.toLowerCase()}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  {p.featured && (
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '10px',
                      padding: '2px 8px', borderRadius: '3px',
                      background: p.color + '15', color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}>featured</span>
                  )}
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)' }}>
                    {p.period}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '1.5rem',
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '2rem', alignItems: 'start',
              }} className="proj-inner">
                {/* Left */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem', fontWeight: 700,
                    color: p.color, marginBottom: '6px',
                  }}>{p.name}</h3>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: '12px',
                    color: 'var(--text3)', marginBottom: '1.25rem',
                  }}>{p.tagline}</p>

                  {/* Stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                    {p.stack.map(s => (
                      <span key={s} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '10px',
                        padding: '2px 8px', borderRadius: '3px',
                        background: p.color + '10',
                        color: 'var(--text2)',
                        border: `1px solid ${p.color}20`,
                      }}>{s}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {p.links.demo && (
                      <a href={p.links.demo} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '12px',
                        color: p.color, display: 'flex', alignItems: 'center', gap: '4px',
                      }}>↗ live demo</a>
                    )}
                    {p.links.code && (
                      <a href={p.links.code} style={{
                        fontFamily: 'var(--font-mono)', fontSize: '12px',
                        color: 'var(--text2)', display: 'flex', alignItems: 'center', gap: '4px',
                      }}>⌥ source</a>
                    )}
                  </div>
                </div>

                {/* Right: bullet points */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {p.points.map((pt, j) => (
                    <li key={j} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '12px',
                      color: 'var(--text2)', lineHeight: 1.75,
                      paddingLeft: '16px', position: 'relative',
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: '6px',
                        width: '6px', height: '1px', background: p.color,
                        opacity: 0.6,
                      }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 700px) { .proj-inner { grid-template-columns: 1fr !important; } }
      `}</style>
    </Section>
  )
}
