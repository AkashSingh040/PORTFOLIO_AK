export default function GridBg() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(rgba(0,255,135,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,135,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,255,135,0.05) 0%, transparent 70%)',
      }} />
    </div>
  )
}
