import Badge from '../UI/UX/Badge'
import { saisonDish } from '../../constants/menuData'

export default function RamenSaison() {
  return (
    <section style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          borderRadius: '2px', border: '1px solid rgba(91,64,61,0.25)',
          background: '#1c1b1b', minHeight: '480px',
          display: 'flex', alignItems: 'center',
        }}>

          {/* Image droite */}
          <div style={{
            position: 'absolute', top: 0, right: 0,
            width: '55%', height: '100%',
          }}>
            <img
              src={saisonDish.image}
              alt={saisonDish.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to right, #1c1b1b 0%, rgba(28,27,27,0.6) 40%, transparent 100%)',
            }} />
          </div>

          {/* Contenu gauche */}
          <div style={{ position: 'relative', zIndex: 2, padding: '64px', maxWidth: '600px' }}>

            <span style={{
              display: 'inline-block',
              background: 'rgba(211,47,47,0.15)',
              border: '1px solid rgba(211,47,47,0.4)',
              color: '#ffb3ac',
              fontFamily: 'Inter, sans-serif', fontSize: '11px',
              fontWeight: 700, letterSpacing: '0.2em',
              textTransform: 'uppercase', padding: '6px 16px',
              borderRadius: '999px', marginBottom: '32px',
            }}>
              🌸 Menu de Saison · {saisonDish.saison}
            </span>

            <h2 style={{
              fontFamily: '"Shippori Mincho", serif',
              fontSize: '52px', fontWeight: 800,
              color: '#e5e2e1', lineHeight: 1.1,
              marginBottom: '8px',
            }}>
              {saisonDish.name}
            </h2>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(228,190,186,0.4)', marginBottom: '8px' }}>
              {saisonDish.nameJp}
            </p>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ffb3ac', fontWeight: 600, marginBottom: '24px' }}>
              {saisonDish.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {saisonDish.badges.map(b => <Badge key={b} label={b} />)}
            </div>

            <p style={{ fontFamily: '"Newsreader", serif', fontSize: '16px', color: 'rgba(228,190,186,0.7)', lineHeight: 1.8, marginBottom: '40px', maxWidth: '480px' }}>
              {saisonDish.description}
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {saisonDish.price.map(p => (
                <div key={p.label} style={{
                  border: '1px solid rgba(91,64,61,0.4)',
                  padding: '12px 20px', borderRadius: '2px',
                }}>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(228,190,186,0.5)', marginBottom: '4px' }}>{p.label}</p>
                  <p style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '22px', fontWeight: 700, color: '#ffb3ac' }}>{p.amount.toFixed(2)}€</p>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '24px', fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(228,190,186,0.3)', letterSpacing: '0.05em' }}>
              Set Menu disponible · +3,80€ (Gyoza ou Edamame)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}