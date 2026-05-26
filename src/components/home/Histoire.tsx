import SectionTitle from '../UI/UX/SectionTitle'

const stats = [
  { value: '1961', label: 'Année de fondation' },
  { value: '50+', label: 'Ans à Paris' },
  { value: '500+', label: 'Restaurants dans le monde' },
]

export default function Histoire() {
  return (
    <section style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          {/* Image */}
          <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: '2px' }}>
            <img
              src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=80"
              alt="Histoire Dosanko"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              position: 'absolute', bottom: '24px', left: '24px',
              background: 'rgba(19,19,19,0.95)', backdropFilter: 'blur(8px)',
              padding: '16px 24px',
              border: '1px solid rgba(91,64,61,0.4)',
            }}>
              <p style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '40px', fontWeight: 700, color: '#ffb3ac', lineHeight: 1 }}>1961</p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e3c199', marginTop: '4px' }}>Fondation</p>
            </div>
          </div>

          {/* Texte */}
          <div>
            <SectionTitle label="Notre Histoire" labelJp="歴史" title="Plus de 60 ans de tradition" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: '"Newsreader", serif', fontSize: '17px', color: 'rgba(228,190,186,0.75)', lineHeight: 1.8 }}>
              <p>
                Fondé en <span style={{ color: '#e5e2e1', fontWeight: 500 }}>1961 à Sapporo</span>, sur l'île d'Hokkaido au nord du Japon,
                Dosanko est l'une des plus anciennes chaînes de ramen du pays. Le nom{' '}
                <em style={{ color: '#e3c199' }}>どさん子</em> signifie littéralement "enfant d'Hokkaido".
              </p>
              <p>
                Spécialiste du <span style={{ color: '#e5e2e1', fontWeight: 500 }}>ramen miso de Sapporo</span> , ce bouillon riche et profond
                né dans les froids hivers d'Hokkaido Dosanko a traversé les décennies en restant fidèle à ses recettes originales.
              </p>
              <p>
                À Paris depuis plus de <span style={{ color: '#e5e2e1', fontWeight: 500 }}>50 ans</span>, notre restaurant de la rue Sainte-Anne
                est l'une des plus anciennes adresses japonaises de la capitale.
              </p>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px', marginTop: '48px', paddingTop: '48px',
              borderTop: '1px solid rgba(91,64,61,0.3)',
            }}>
              {stats.map(stat => (
                <div key={stat.label}>
                  <p style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '28px', fontWeight: 700, color: '#ffb3ac' }}>{stat.value}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(228,190,186,0.5)', marginTop: '4px', lineHeight: 1.4 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}