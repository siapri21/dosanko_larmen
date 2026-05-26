import { Link } from 'react-router-dom'
import SectionTitle from '../UI/UX/SectionTitle'
import Badge from '../UI/UX/Badge'

const specialites = [
  {
    name: 'Miso Rouge Royal',
    nameJp: '赤練ロワイヤル',
    description: 'Notre signature. Bouillon miso rouge intense, 3 tranches de porc rôti, œuf mariné, maïs et bambou.',
    image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80',
    price: 'À partir de 16,50€',
    badges: ['Signature', 'Royal'],
  },
  {
    name: 'Tsukemen Froid',
    nameJp: '冷やし醤油つけ麺',
    description: 'Nouilles froides à tremper dans une sauce soja profonde. Porc grillé, œuf mariné, algues.',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80',
    price: 'À partir de 15€',
    badges: ['Nouveau', 'Froid'],
  },
  {
    name: 'Kaisen Yasai',
    nameJp: '海鮮野菜ラーメン',
    description: 'Ramen aux fruits de mer et légumes frais. Crevettes, coquilles Saint-Jacques, brocolis.',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&q=80',
    price: 'À partir de 16,50€',
    badges: ['Fruits de mer'],
  },
]

export default function Specialites() {
  return (
    <section style={{ background: '#1c1b1b', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionTitle label="Nos Spécialités" labelJp="おすすめ" title="Les incontournables" center />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '16px' }}>
          {specialites.map(item => (
            <div key={item.name} style={{
              background: '#2a2a2a', borderRadius: '2px',
              overflow: 'hidden', border: '1px solid rgba(91,64,61,0.15)',
              transition: 'border-color 0.3s',
            }}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  {item.badges.map(b => <Badge key={b} label={b} />)}
                </div>
                <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '20px', fontWeight: 700, color: '#e5e2e1', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(228,190,186,0.4)', marginBottom: '12px', letterSpacing: '0.1em' }}>{item.nameJp}</p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.65)', lineHeight: 1.7, marginBottom: '16px' }}>{item.description}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#ffb3ac' }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link to="/carte" style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px',
            fontWeight: 500, letterSpacing: '0.25em',
            textTransform: 'uppercase', color: '#ffb3ac',
            textDecoration: 'none', display: 'inline-flex',
            alignItems: 'center', gap: '8px',
          }}>
            Voir toute la carte →
          </Link>
        </div>
      </div>
    </section>
  )
}