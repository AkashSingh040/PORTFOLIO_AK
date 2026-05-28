import { Section, SectionTitle, FadeIn } from './SectionUtils'

const edu = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    school: 'NIT Srinagar',
    year: '2023 – 2027',
    grade: 'CGPA: 9.06 / 10',
  },
  {
    degree: 'Class XII (CBSE)',
    school: 'Kanha Makhan Public School',
    year: '2022',
    grade: '95.4%',
  },
  {
    degree: 'Class X (CBSE)',
    school: 'Kanha Makhan Public School',
    year: '2020',
    grade: '95%',
  },
]

export default function About() {
  return (
    <Section id="about">
      <SectionTitle number="01" title="About Me" />

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'start',
      }} className="about-grid">
        {/* Bio */}
        <FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text3)', marginBottom: '0.5rem',
            }}>
              <span style={{ color: 'var(--green2)' }}>{'// '}</span>who_am_i.md
            </div>
            <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.9 }}>
              I'm a passionate Computer Science student at NIT Srinagar, building 
              production-grade full-stack applications and AI-powered systems from the ground up.
            </p>
            <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.9 }}>
              From engineering RAG pipelines with LangChain and FAISS to deploying real-time 
              ML APIs with FastAPI — I love bridging the gap between cutting-edge research 
              and practical software.
            </p>
            <p style={{ color: 'var(--text2)', fontSize: '14px', lineHeight: 1.9 }}>
              When not coding, I'm solving DSA problems (500+ and counting), mentoring peers, 
              or exploring evolutionary computation — formerly a research intern at IIT BHU.
            </p>

            {/* Contact bits */}
            <div style={{
              marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '8px',
            }}>
              {[
                { label: 'email', val: '2023nitsgr215@nitsri.ac.in' },
                { label: 'phone', val: '+91-9528799657' },
                { label: 'location', val: 'NIT Srinagar, J&K, India' },
              ].map(item => (
                <div key={item.label} style={{
                  display: 'flex', gap: '12px', fontSize: '13px',
                }}>
                  <span style={{ color: 'var(--text3)', minWidth: '70px' }}>{item.label}:</span>
                  <span style={{ color: 'var(--green)' }}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.15}>
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: '12px',
            color: 'var(--text3)', marginBottom: '1.5rem',
          }}>
            <span style={{ color: 'var(--green2)' }}>{'// '}</span>education[]
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {edu.map((e, i) => (
              <div key={i} style={{
                padding: '1.25rem',
                border: '1px solid var(--border2)',
                borderLeft: '2px solid var(--green)',
                borderRadius: '0 6px 6px 0',
                background: 'var(--green-dim)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
                onMouseEnter={e2 => { e2.currentTarget.style.borderLeftColor = 'var(--green2)'; e2.currentTarget.style.background = 'rgba(0,255,135,0.06)' }}
                onMouseLeave={e2 => { e2.currentTarget.style.borderLeftColor = 'var(--green)'; e2.currentTarget.style.background = 'var(--green-dim)' }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '15px',
                  fontWeight: 600, color: 'var(--text)', marginBottom: '4px',
                }}>{e.degree}</div>
                <div style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '4px' }}>
                  {e.school}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                  <span style={{ color: 'var(--text3)' }}>{e.year}</span>
                  <span style={{ color: 'var(--green)', fontWeight: 500 }}>{e.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </Section>
  )
}
