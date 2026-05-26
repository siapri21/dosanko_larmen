type Props = {
    nom: string
    adresse: string
    cp: string
    metro: string
    horaires: { jour: string; jourJp: string; plages: string[] }[]
    principal?: boolean
  }
  
  export default function AdresseCard({ nom, adresse, cp, metro, horaires, principal }: Props) {
    return (
      <div style={{
        border: principal ? '1px solid rgba(211,47,47,0.35)' : '1px solid rgba(91,64,61,0.2)',
        background: principal ? 'rgba(211,47,47,0.04)' : '#1c1b1b',
        borderRadius: '2px',
        padding: '40px',
      }}>
  
        {principal && (
          <span style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif', fontSize: '10px',
            fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#ffb3ac',
            border: '1px solid rgba(255,179,172,0.3)',
            padding: '4px 12px', borderRadius: '999px',
            marginBottom: '20px',
          }}>
            Adresse principale
          </span>
        )}
  
        <h3 style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '28px', fontWeight: 700,
          color: '#e5e2e1', marginBottom: '8px',
        }}>
          {nom}
        </h3>
  
        <p style={{ fontFamily: '"Newsreader", serif', fontSize: '16px', color: 'rgba(228,190,186,0.7)' }}>
          {adresse}
        </p>
        <p style={{ fontFamily: '"Newsreader", serif', fontSize: '16px', color: 'rgba(228,190,186,0.7)', marginBottom: '24px' }}>
          {cp}
        </p>
  
        {/* Métro */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: '8px',
          marginBottom: '32px', padding: '12px 16px',
          background: 'rgba(91,64,61,0.1)',
          borderRadius: '2px',
        }}>
          <span style={{ fontSize: '16px' }}>🚇</span>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(228,190,186,0.5)', lineHeight: 1.6 }}>
            {metro}
          </p>
        </div>
  
        {/* Horaires */}
        <div style={{ borderTop: '1px solid rgba(91,64,61,0.2)', paddingTop: '24px' }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px',
            fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: '#e3c199',
            marginBottom: '16px',
          }}>
            Horaires
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {horaires.map(h => (
              <div key={h.jour} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              }}>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#e5e2e1' }}>{h.jour}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(228,190,186,0.3)', letterSpacing: '0.1em' }}>{h.jourJp}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  {h.plages.map(p => (
                    <p key={p} style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '15px', fontWeight: 700, color: '#ffb3ac' }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
  
      </div>
    )
  }