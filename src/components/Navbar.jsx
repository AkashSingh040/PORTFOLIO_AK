import { useState, useEffect } from 'react'

const links = ['about', 'skills', 'projects', 'experience', 'achievements', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      height: '60px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(5,10,8,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,255,135,0.08)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontWeight: 700,
        fontSize: '14px', color: 'var(--green)',
        letterSpacing: '0.1em',
      }}>
        <span style={{ color: 'var(--text3)' }}>~/</span>akash<span style={{ color: 'var(--text3)' }}>_</span>singh
      </span>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '2rem', listStyle: 'none',
        '@media (max-width: 768px)': { display: 'none' },
      }} className="nav-links">
        {links.map((l, i) => (
          <li key={l}>
            <a href={`#${l}`} style={{
              fontFamily: 'var(--font-mono)', fontSize: '12px',
              color: 'var(--text2)', letterSpacing: '0.05em',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--green)'}
              onMouseLeave={e => e.target.style.color = 'var(--text2)'}
            >
              <span style={{ color: 'var(--text3)' }}>{String(i + 1).padStart(2, '0')}.</span> {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        display: 'none', background: 'none', border: 'none',
        cursor: 'pointer', color: 'var(--green)', fontSize: '20px',
      }} className="hamburger" aria-label="Menu">☰</button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '60px', left: 0, right: 0,
          background: 'rgba(5,10,8,0.98)', borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {links.map((l, i) => (
            <a key={l} href={`#${l}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text2)' }}>
              <span style={{ color: 'var(--text3)' }}>{String(i + 1).padStart(2, '0')}.</span> {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
