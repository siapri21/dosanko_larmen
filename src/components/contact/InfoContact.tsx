export default function InfoContact() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
  
        {/* Téléphone */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          padding: '20px 24px',
          border: '1px solid rgba(91,64,61,0.2)',
          borderRadius: '2px', background: '#1c1b1b',
        }}>
          <span style={{ fontSize: '24px' }}>📞</span>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e3c199', marginBottom: '4px' }}>
              Téléphone
            </p>
            <a href="tel:+33172636355" style={{
              fontFamily: '"Shippori Mincho", serif',
              fontSize: '22px', fontWeight: 700,
              color: '#ffb3ac', textDecoration: 'none',
            }}>
              01 72 63 63 55
            </a>
          </div>
        </div>
  
        {/* Sans réservation */}
        <div style={{
          padding: '24px',
          border: '1px solid rgba(227,193,153,0.2)',
          borderRadius: '2px',
          background: 'rgba(227,193,153,0.04)',
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '20px', marginTop: '2px' }}>ℹ️</span>
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '13px',
                fontWeight: 700, color: '#e3c199', marginBottom: '8px',
              }}>
                Sans réservation
              </p>
              <p style={{
                fontFamily: '"Newsreader", serif', fontSize: '15px',
                color: 'rgba(228,190,186,0.65)', lineHeight: 1.7,
              }}>
                Nous n'acceptons pas les réservations. Les tables sont attribuées à l'arrivée, dans l'ordre de passage.
                Nous vous conseillons de venir en dehors des heures de pointe (12h–13h et 19h–20h).
              </p>
            </div>
          </div>
        </div>
  
        {/* Paiement */}
        <div style={{
          padding: '20px 24px',
          border: '1px solid rgba(91,64,61,0.2)',
          borderRadius: '2px', background: '#1c1b1b',
          display: 'flex', gap: '12px', alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '20px', marginTop: '2px' }}>💳</span>
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 700, color: '#e5e2e1', marginBottom: '4px' }}>
              Paiement
            </p>
            <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.65)' }}>
              Carte bancaire acceptée. Chèques non acceptés.
            </p>
          </div>
        </div>
  
      </div>
    )
  }