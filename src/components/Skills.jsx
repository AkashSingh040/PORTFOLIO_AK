import { Section, SectionTitle, FadeIn } from './SectionUtils'

const skillGroups = [
  {
    category: 'Languages',
    color: 'var(--green)',
    icon: '</>',
    items: ['C/C++', 'Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks',
    color: 'var(--teal)',
    icon: '[]',
    items: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'LangChain'],
  },
  {
    category: 'Databases & Cloud',
    color: 'var(--amber)',
    icon: '{}',
    items: ['MongoDB', 'MySQL', 'MongoDB Atlas', 'Cloudinary', 'Vercel', 'Render'],
  },
  {
    category: 'AI / ML',
    color: '#B06EFF',
    icon: '~>',
    items: ['Machine Learning', 'NLP', 'CNNs', 'TF-IDF', 'Logistic Regression', 'RAG', 'FAISS', 'Genetic Algorithms'],
  },
  {
    category: 'Tools',
    color: '#FF6E6E',
    icon: '$$',
    items: ['Git/GitHub', 'Postman', 'VS Code'],
  },
  {
    category: 'Core CS',
    color: 'var(--green2)',
    icon: '**',
    items: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'],
  },
]

export default function Skills() {
  return (
    <Section id="skills">
      <SectionTitle number="02" title="Tech Stack" />

      <FadeIn>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {skillGroups.map((group) => (
            <div key={group.category} style={{
              padding: '1.5rem',
              border: '1px solid var(--border2)',
              borderRadius: '8px',
              background: 'rgba(0,255,135,0.01)',
              transition: 'border-color 0.25s, background 0.25s, transform 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = group.color + '40'
                e.currentTarget.style.background = group.color + '06'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.background = 'rgba(0,255,135,0.01)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '1.25rem',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '13px',
                  color: group.color, opacity: 0.8,
                  minWidth: '28px',
                }}>{group.icon}</span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '14px',
                  fontWeight: 600, color: 'var(--text)',
                }}>{group.category}</span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    padding: '3px 10px',
                    border: `1px solid ${group.color}30`,
                    borderRadius: '3px',
                    color: 'var(--text2)',
                    background: group.color + '08',
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  )
}
