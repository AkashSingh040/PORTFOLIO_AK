import { Section, SectionTitle, FadeIn } from './SectionUtils'

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle number="06" title="Get In Touch" />

      <FadeIn>
        <div style={{
          maxWidth: '640px', margin: '0 auto', textAlign: 'center',
        }}>
          {/* Terminal window */}
          <div style={{
            border: '1px solid var(--border)',
            borderRadius: '10px', overflow: 'hidden',
            background: 'rgba(0,0,0,0.4)',
          }}>
            {/* Bar */}
            <div style={{
              padding: '0.75rem 1rem',
              borderBottom: '1px solid var(--border2)',
              background: 'rgba(0,0,0,0.3)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.6 }} />
              ))}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text3)', marginLeft: '6px' }}>
                contact.sh
              </span>
            </div>

            {/* Content */}
            <div style={{ padding: '2.5rem 2rem' }}>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '13px',
                color: 'var(--text3)', marginBottom: '0.5rem',
              }}>
                <span style={{ color: 'var(--green2)' }}>$</span> echo "Currently open to:"
              </p>
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: '1.6rem',
                fontWeight: 700, color: 'var(--text)', marginBottom: '1rem',
              }}>
                Internships & Collaborations
              </p>
              <p style={{
                fontFamily: 'var(--font-mono)', fontSize: '13px',
                color: 'var(--text2)', lineHeight: 1.8, marginBottom: '2.5rem',
              }}>
                Whether it's a full-stack project, AI/ML research, or an exciting internship — 
                I'm always up for a great challenge. My inbox is open.
              </p>

              {/* Links grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '12px', marginBottom: '2rem',
              }}>
                {[
                  { label: 'email', val: '2023nitsgr215@nitsri.ac.in', href: 'mailto:2023nitsgr215@nitsri.ac.in', color: 'var(--green)' },
                  { label: 'linkedin', val: 'linkedin.com/in/akash', href: 'https://www.linkedin.com/in/akash-singh040', color: 'var(--teal)' },
                  { label: 'github', val: 'github.com/akash', href: 'https://github.com/AkashSingh040', color: 'var(--amber)' },
                  { label: 'phone', val: '+91-9528799657', href: 'tel:+919528799657', color: '#B06EFF' },
                ].map(item => (
                  <a key={item.label} href={item.href} style={{
                    padding: '1rem',
                    border: `1px solid ${item.color}25`,
                    borderRadius: '8px',
                    background: item.color + '08',
                    display: 'flex', flexDirection: 'column',
                    gap: '4px', textDecoration: 'none',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = item.color + '60'
                      e.currentTarget.style.background = item.color + '12'
                      e.currentTarget.style.textDecoration = 'none'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = item.color + '25'
                      e.currentTarget.style.background = item.color + '08'
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: item.color, textAlign: 'left' }}>
                      {item.label}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text2)', textAlign: 'left' }}>
                      {item.val}
                    </span>
                  </a>
                ))}
              </div>

              <a href="mailto:2023nitsgr215@nitsri.ac.in" style={{
                display: 'inline-block',
                fontFamily: 'var(--font-mono)', fontSize: '13px',
                padding: '12px 36px',
                border: '1px solid var(--green)',
                color: 'var(--green)',
                background: 'var(--green-dim)',
                borderRadius: '4px',
                transition: 'all 0.2s',
                letterSpacing: '0.05em',
              }}
                onMouseEnter={e => { e.target.style.background = 'rgba(0,255,135,0.15)'; e.target.style.textDecoration = 'none' }}
                onMouseLeave={e => e.target.style.background = 'var(--green-dim)'}
              >
                ./say_hello ↩
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
