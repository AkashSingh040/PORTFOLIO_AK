export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border2)',
      padding: '2rem',
      textAlign: 'center',
      position: 'relative', zIndex: 1,
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '12px',
        color: 'var(--text3)',
      }}>
        <span style={{ color: 'var(--green)', opacity: 0.5 }}>{'// '}</span>
        designed & built by{' '}
        <span style={{ color: 'var(--green)' }}>Akash Singh</span>
        {' '}·{' '}
        <span>NIT Srinagar © {new Date().getFullYear()}</span>
      </p>
    </footer>
  )
}
