import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const roles = [
  'Full Stack Engineer',
  'AI/ML Developer',
  'RAG Systems Builder',
  'Problem Solver',
  'CS @ NIT Srinagar',
]

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1))
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setWordIdx(w => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '80px 2rem 2rem',
      position: 'relative', zIndex: 1,
      maxWidth: '1100px', margin: '0 auto',
    }}>
      <div>
        {/* Terminal prompt line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            color: 'var(--text3)', marginBottom: '1.5rem',
            display: 'flex', alignItems: 'center', gap: '8px',
          }}>
          <span style={{ color: 'var(--green2)' }}>akash@portfolio</span>
          <span>:</span>
          <span style={{ color: 'var(--teal)' }}>~/dev</span>
          <span>$</span>
          <span style={{ color: 'var(--text2)' }}>cat resume.txt</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800, lineHeight: 1,
            color: 'var(--text)',
            marginBottom: '0.5rem',
          }}>
          Akash
          <br />
          <span style={{
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0,255,135,0.4)',
          }}>Singh</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: 'var(--green)', marginBottom: '2rem',
            minHeight: '28px',
          }}>
          <span style={{ color: 'var(--text3)' }}>&gt; </span>
          {typed}
          <span style={{
            display: 'inline-block', width: '2px', height: '1.1em',
            background: 'var(--green)', marginLeft: '2px',
            verticalAlign: 'text-bottom',
            animation: 'blink 1s step-end infinite',
          }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            maxWidth: '540px',
            color: 'var(--text2)', fontSize: '14px', lineHeight: 1.8,
            marginBottom: '2.5rem',
            borderLeft: '2px solid var(--border)',
            paddingLeft: '1rem',
          }}>
          B.Tech CSE student at NIT Srinagar (CGPA 9.06) building scalable full-stack platforms, 
          RAG-powered AI systems, and ML pipelines. Former research intern at IIT BHU. 
          500+ DSA problems solved.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            padding: '10px 24px',
            border: '1px solid var(--green)',
            color: 'var(--green)',
            background: 'var(--green-dim)',
            borderRadius: '4px',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.background = 'rgba(0,255,135,0.15)'; e.target.style.textDecoration = 'none' }}
            onMouseLeave={e => { e.target.style.background = 'var(--green-dim)' }}>
            ./view_projects
          </a>
          <a href="#contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            padding: '10px 24px',
            border: '1px solid var(--border)',
            color: 'var(--text2)',
            background: 'transparent',
            borderRadius: '4px',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--green)'; e.target.style.color = 'var(--green)'; e.target.style.textDecoration = 'none' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text2)' }}>
            ./contact_me
          </a>
          <a href="https://github.com/AkashSingh040" target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px',
            padding: '10px 24px',
            border: '1px solid var(--border)',
            color: 'var(--text2)',
            background: 'transparent',
            borderRadius: '4px',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--teal)'; e.target.style.color = 'var(--teal)'; e.target.style.textDecoration = 'none' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text2)' }}>
            github ↗
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{
            position: 'absolute', bottom: '2rem', left: '2rem',
            display: 'flex', alignItems: 'center', gap: '8px',
            color: 'var(--text3)', fontSize: '11px',
            fontFamily: 'var(--font-mono)',
          }}>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, transparent, var(--green2))',
          }} />
          scroll
        </motion.div>
      </div>

      {/* Right side: stat block */}
      <motion.div
        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{
          position: 'absolute', right: '4rem', top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', flexDirection: 'column', gap: '1.5rem',
        }}
        className="hero-stats">
        {[
          { num: '9.06', label: 'CGPA / 10' },
          { num: '500+', label: 'DSA Solved' },
          { num: '1600+', label: 'LeetCode Rating' },
          { num: '3rd', label: 'IUST Hackathon 2025' },
        ].map(s => (
          <div key={s.label} style={{
            textAlign: 'center',
            padding: '1rem',
            border: '1px solid var(--border2)',
            borderRadius: '8px',
            background: 'rgba(0,255,135,0.02)',
            minWidth: '110px',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem', fontWeight: 700,
              color: 'var(--green)', lineHeight: 1,
            }}>{s.num}</div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px', color: 'var(--text3)',
              marginTop: '4px', letterSpacing: '0.05em',
            }}>{s.label}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @media (max-width: 900px) { .hero-stats { display: none !important; } }
      `}</style>
    </section>
  )
}
