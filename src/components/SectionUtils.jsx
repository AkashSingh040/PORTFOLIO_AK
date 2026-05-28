import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function SectionTitle({ number, title }) {
  return (
    <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '13px',
        color: 'var(--green)', opacity: 0.6,
      }}>{number}.</span>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
        fontWeight: 700, color: 'var(--text)',
      }}>{title}</h2>
      <div style={{
        flex: 1, height: '1px',
        background: 'linear-gradient(to right, var(--border), transparent)',
        maxWidth: '300px',
      }} />
    </div>
  )
}

export function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }} style={style}>
      {children}
    </motion.div>
  )
}

export function Section({ id, children }) {
  return (
    <section id={id} style={{
      maxWidth: '1100px', margin: '0 auto',
      padding: '6rem 2rem',
      position: 'relative', zIndex: 1,
    }}>
      {children}
    </section>
  )
}
