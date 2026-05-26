import Badge from '../UI/UX/Badge'
import type { Dish } from '../../constants/menuData'

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <div style={{
      background: '#2a2a2a',
      border: '1px solid rgba(91,64,61,0.15)',
      borderRadius: '2px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      transition: 'border-color 0.3s',
    }}>

      {/* Image */}
      <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
        <img
          src={dish.image}
          alt={dish.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>

      {/* Contenu */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Badges */}
        {dish.badges && dish.badges.length > 0 && (
          <div style={{ display: 'flex', gap: '6px', marginBottom: '10px', flexWrap: 'wrap' }}>
            {dish.badges.map(b => <Badge key={b} label={b} />)}
          </div>
        )}

        {/* Nom */}
        <h3 style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '18px', fontWeight: 700,
          color: '#e5e2e1', marginBottom: '4px',
        }}>
          {dish.name}
        </h3>

        {/* Nom japonais */}
        {dish.nameJp && (
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px',
            color: 'rgba(228,190,186,0.35)', letterSpacing: '0.1em',
            marginBottom: '10px',
          }}>
            {dish.nameJp}
          </p>
        )}

        {/* Description */}
        <p style={{
          fontFamily: '"Newsreader", serif', fontSize: '14px',
          color: 'rgba(228,190,186,0.6)', lineHeight: 1.7,
          flex: 1, marginBottom: '16px',
        }}>
          {dish.description}
        </p>

        {/* Prix */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', borderTop: '1px solid rgba(91,64,61,0.2)', paddingTop: '14px' }}>
          {dish.price.map(p => (
            <div key={p.label}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(228,190,186,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>
                {p.label}
              </p>
              <p style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '18px', fontWeight: 700, color: '#ffb3ac' }}>
                {p.amount.toFixed(2)}€
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}