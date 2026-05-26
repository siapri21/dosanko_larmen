import SectionTitle from '../UI/UX/SectionTitle'

const adresses = [
  {
    nom: 'Sainte-Anne',
    adresse: '40 rue Sainte-Anne',
    cp: '75002 Paris',
    metro: 'Pyramides (M14, M7) · Quatre-Septembre (M3)',
    image: '/devanture.jpeg',
    principal: true,
  },
  {
    nom: 'Petits Champs',
    adresse: '30 rue des Petits Champs',
    cp: '75002 Paris',
    metro: 'Pyramides (M14, M7) · Palais Royal (M1)',
    image: '/devanture2.jpeg',
    principal: false,
  },
]

export default function Localisation() {
  return (
    <section style={{ background: '#1c1b1b', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionTitle label="Nous Trouver" labelJp="アクセス" title="Deux adresses à Paris" center />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '16px' }}>
          {adresses.map(a => (
            <div key={a.nom} style={{
              borderRadius: '2px', overflow: 'hidden',
              border: a.principal ? '1px solid rgba(211,47,47,0.35)' : '1px solid rgba(91,64,61,0.2)',
            }}>
              {/* Image */}
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={a.image}
                  alt={a.nom}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Contenu */}
              <div style={{
                padding: '32px',
                background: a.principal ? 'rgba(211,47,47,0.04)' : '#2a2a2a',
              }}>
                {a.principal && (
                  <span style={{
                    display: 'inline-block',
                    fontFamily: 'Inter, sans-serif', fontSize: '10px',
                    fontWeight: 700, letterSpacing: '0.2em',
                    textTransform: 'uppercase', color: '#ffb3ac',
                    border: '1px solid rgba(255,179,172,0.3)',
                    padding: '4px 12px', borderRadius: '999px',
                    marginBottom: '16px',
                  }}>
                    Adresse principale
                  </span>
                )}
                <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '26px', fontWeight: 700, color: '#e5e2e1', marginBottom: '8px' }}>
                  {a.nom}
                </h3>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '16px', color: 'rgba(228,190,186,0.7)' }}>{a.adresse}</p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '16px', color: 'rgba(228,190,186,0.7)', marginBottom: '20px' }}>{a.cp}</p>
                <div style={{
                  borderTop: '1px solid rgba(91,64,61,0.2)', paddingTop: '16px',
                  display: 'flex', alignItems: 'flex-start', gap: '8px',
                }}>
                  <span>🚇</span>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(228,190,186,0.45)', lineHeight: 1.6 }}>
                    {a.metro}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}