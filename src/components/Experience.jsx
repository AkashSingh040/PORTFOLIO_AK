import { Section, SectionTitle, FadeIn } from './SectionUtils'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionTitle number="04" title="Research Experience" />

      <FadeIn>
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'flex-start',
        }} className="exp-wrap">
          {/* Timeline line */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            paddingTop: '8px',
          }} className="exp-timeline">
            <div style={{
              width: '10px', height: '10px', borderRadius: '50%',
              border: '2px solid var(--green)',
              background: 'var(--bg)',
              boxShadow: '0 0 8px var(--green)',
            }} />
            <div style={{
              width: '1px', flex: 1, minHeight: '60px',
              background: 'linear-gradient(to bottom, var(--green), transparent)',
              opacity: 0.3,
            }} />
          </div>

          {/* Card */}
          <div style={{
            flex: 1,
            padding: '2rem',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            background: 'rgba(0,255,135,0.02)',
          }}>
            {/* Header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '8px', marginBottom: '0.75rem',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.2rem',
                  fontWeight: 700, color: 'var(--text)', marginBottom: '4px',
                }}>Former Research Intern — Genetic Algorithms</h3>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px',
                  color: 'var(--green)',
                }}>Indian Institute of Technology (IIT) BHU, Uttar Pradesh</div>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '12px',
                color: 'var(--text3)',
                padding: '4px 12px',
                border: '1px solid var(--border2)',
                borderRadius: '4px',
                height: 'fit-content',
                whiteSpace: 'nowrap',
              }}>Dec 2025 – Feb 2026</span>
            </div>

            <div style={{
              width: '40px', height: '1px',
              background: 'var(--green)', opacity: 0.3,
              marginBottom: '1.25rem',
            }} />

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                'Researched Genetic Algorithms, evolutionary computation, and heuristic optimization techniques for AI-driven learning systems.',
                'Implemented a CNN-based image recognition model on the CIFAR-10 dataset using a Lamarckian-inspired evolutionary optimization approach as proposed in contemporary ICLR research.',
                'Explored adaptive fitness optimization and hybrid evolutionary learning methods to improve training efficiency, convergence performance, and reduce computational hardware cost.',
              ].map((pt, i) => (
                <li key={i} style={{
                  display: 'flex', gap: '12px',
                  fontFamily: 'var(--font-mono)', fontSize: '13px',
                  color: 'var(--text2)', lineHeight: 1.8,
                }}>
                  <span style={{ color: 'var(--green)', opacity: 0.5, flexShrink: 0, marginTop: '2px' }}>▸</span>
                  {pt}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1.5rem' }}>
              {['Genetic Algorithms', 'CNNs', 'CIFAR-10', 'Evolutionary Computation', 'ICLR Research', 'Lamarckian Learning'].map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  padding: '2px 8px', borderRadius: '3px',
                  background: 'rgba(0,255,135,0.05)',
                  color: 'var(--text3)',
                  border: '1px solid var(--border2)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <style>{`
        @media (max-width: 600px) {
          .exp-timeline { display: none !important; }
          .exp-wrap { gap: 0 !important; }
        }
      `}</style>
    </Section>
  )
}
