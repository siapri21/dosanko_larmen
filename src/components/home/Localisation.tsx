import SectionTitle from '../UI/UX/SectionTitle'

const adresses = [
  {
    nom: 'Sainte-Anne',
    adresse: '40 rue Sainte-Anne',
    cp: '75002 Paris',
    metro: 'Pyramides (M14, M7) · Quatre-Septembre (M3)',
    principal: true,
  },
  {
    nom: 'Petits Champs',
    adresse: '30 rue des Petits Champs',
    cp: '75002 Paris',
    metro: 'Pyramides (M14, M7) · Palais Royal (M1)',
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
              padding: '40px',
              borderRadius: '2px',
              border: a.principal ? '1px solid rgba(211,47,47,0.35)' : '1px solid rgba(91,64,61,0.2)',
              background: a.principal ? 'rgba(211,47,47,0.05)' : '#2a2a2a',
            }}>
              {a.principal && (
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'Inter, sans-serif', fontSize: '10px',
                  fontWeight: 600, letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: '#ffb3ac',
                  border: '1px solid rgba(255,179,172,0.3)',
                  padding: '4px 12px', borderRadius: '999px',
                  marginBottom: '20px',
                }}>
                  Adresse principale
                </span>
              )}
              <h3 style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '28px', fontWeight: 700, color: '#e5e2e1', marginBottom: '8px' }}>{a.nom}</h3>
              <p style={{ fontFamily: '"Newsreader", serif', fontSize: '16px', color: 'rgba(228,190,186,0.7)' }}>{a.adresse}</p>
              <p style={{ fontFamily: '"Newsreader", serif', fontSize: '16px', color: 'rgba(228,190,186,0.7)', marginBottom: '24px' }}>{a.cp}</p>
              <div style={{ borderTop: '1px solid rgba(91,64,61,0.2)', paddingTop: '20px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(228,190,186,0.4)' }}>🚇 {a.metro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}