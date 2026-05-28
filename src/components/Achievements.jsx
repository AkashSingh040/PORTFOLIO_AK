import { Section, SectionTitle, FadeIn } from './SectionUtils'

const achievements = [
  {
    icon: '',
    title: '3rd Place — IUST Coding Hackathon 2025',
    desc: 'Secured 3rd position among highly competitive teams in the inter-university coding hackathon.',
    color: '#CD7F32',
  },
  {
  icon: '',
  title: 'Proggy Buggy — Global Competitive Programming Contest',
  desc: 'Secured 4th rank in India and 57th rank worldwide in the Proggy Buggy international programming contest, competing against participants from across the globe in algorithmic problem-solving and coding challenges.',
  color: 'var(--yellow)',
},
{
  icon: '',
  title: 'EIBS 2.0 — IIT Kharagpur Finalist',
  desc: 'Selected as a finalist in EIBS 2.0 conducted by IIT Kharagpur, recognized for innovation, problem-solving, and competitive performance among top student teams.',
  color: 'var(--blue)',
},
  {
    icon: '',
    title: '500+ DSA Problems Solved',
    desc: 'Consistent problem-solving across coding platforms including LeetCode , Codeforces, and more.',
    color: 'var(--amber)',
  },
  {
    icon: '',
    title: 'Cursor AI Hackathon Participant',
    desc: 'Participated in the Cursor AI Hackathon, exploring AI-assisted software development workflows.',
    color: 'var(--teal)',
  },
  {
    icon: '',
    title: 'NSS — Run for Unity & Community Work',
    desc: 'Active member of the NSS college unit; participated in social initiatives and community engagement activities.',
    color: 'var(--green)',
  }
  
]

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle number="05" title="Achievements" />

      <FadeIn>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
        }}>
          {achievements.map((a, i) => (
            <div key={i} style={{
              padding: '1.5rem',
              border: '1px solid var(--border2)',
              borderRadius: '8px',
              background: 'rgba(0,0,0,0.2)',
              display: 'flex', gap: '1rem',
              transition: 'border-color 0.25s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = a.color + '50'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                fontSize: '1.5rem', lineHeight: 1,
                flexShrink: 0, marginTop: '2px',
              }}>{a.icon}</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '14px',
                  fontWeight: 600, color: 'var(--text)',
                  marginBottom: '6px',
                }}>{a.title}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '12px',
                  color: 'var(--text2)', lineHeight: 1.7,
                }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  )
}
