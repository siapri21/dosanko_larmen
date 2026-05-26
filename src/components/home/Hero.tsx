import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh' }}>

      {/* Image de fond */}
      <img
        src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=1600&q=80"
        alt="Ramen Dosanko"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.65)' }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, #131313 0%, rgba(19,19,19,0.4) 40%, transparent 100%)'
      }} />

      {/* Contenu centré */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px',
      }}>

        <span style={{
          fontSize: '11px', fontFamily: 'Inter, sans-serif',
          fontWeight: 600, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#e3c199',
          border: '1px solid rgba(227,193,153,0.3)',
          padding: '6px 20px', borderRadius: '999px',
          marginBottom: '32px', display: 'inline-block'
        }}>
          創業昭和三十六年 · Depuis 1961
        </span>

        <h1 style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: 'clamp(72px, 12vw, 140px)',
          fontWeight: 800, color: '#e5e2e1',
          lineHeight: 1, marginBottom: '12px',
        }}>
          どさん子
        </h1>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '13px', letterSpacing: '0.4em',
          textTransform: 'uppercase', color: '#ffb3ac',
          marginBottom: '20px',
        }}>
          Dosanko Larmen · Paris
        </p>

        <p style={{
          fontFamily: '"Newsreader", serif',
          fontSize: '18px', color: 'rgba(228,190,186,0.8)',
          maxWidth: '420px', lineHeight: 1.7,
          fontStyle: 'italic', marginBottom: '48px',
        }}>
          Le ramen authentique de Sapporo,<br />
          au cœur de Paris depuis plus de 50 ans.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/carte" style={{
            background: '#d32f2f', color: 'white',
            fontFamily: 'Inter, sans-serif', fontWeight: 600,
            fontSize: '12px', letterSpacing: '0.2em',
            textTransform: 'uppercase', padding: '16px 40px',
            borderRadius: '2px', textDecoration: 'none',
            boxShadow: '0 0 30px rgba(211,47,47,0.4)',
            transition: 'all 0.3s',
          }}>
            Notre Carte
          </Link>
          <Link to="/contact" style={{
            border: '1px solid rgba(227,193,153,0.4)',
            color: '#e3c199',
            fontFamily: 'Inter, sans-serif', fontWeight: 500,
            fontSize: '12px', letterSpacing: '0.2em',
            textTransform: 'uppercase', padding: '16px 40px',
            borderRadius: '2px', textDecoration: 'none',
          }}>
            Nous Trouver
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '32px',
        left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '8px',
        color: 'rgba(229,226,225,0.3)',
      }}>
        <span style={{ fontSize: '10px', fontFamily: 'Inter', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          Défiler
        </span>
        <div style={{
          width: '1px', height: '48px',
          background: 'linear-gradient(to bottom, rgba(229,226,225,0.4), transparent)',
        }} />
      </div>

    </section>
  )
}