export default function Footer() {
  return (
    <footer >
      <div style={{
        background: '#1c1b1b',
        borderTop: '1px solid rgba(91,64,61,0.2)',
        marginTop: '80px',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '80px 48px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '64px',
        }}>

          {/* Colonne 1 */}
          <div>
            <p style={{
              fontFamily: '"Shippori Mincho", serif',
              fontSize: '32px', fontWeight: 800,
              color: '#ffb3ac', marginBottom: '8px',
            }}>
              どさん子
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '10px',
              fontWeight: 700, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#e3c199',
              marginBottom: '24px',
            }}>
              Dosanko Larmen — Depuis 1961
            </p>
            <p style={{
              fontFamily: '"Newsreader", serif', fontSize: '15px',
              color: 'rgba(228,190,186,0.55)', lineHeight: 1.8,
            }}>
              Ramen traditionnel de Sapporo,<br />
              au cœur de Paris depuis plus de 50 ans.
            </p>
          </div>

          {/* Colonne 2 */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px',
              fontWeight: 700, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#e3c199',
              marginBottom: '28px',
            }}>
              Adresses
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#e5e2e1', marginBottom: '4px' }}>
                  Sainte-Anne
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  40 rue Sainte-Anne
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  75002 Paris
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#e5e2e1', marginBottom: '4px' }}>
                  Petits Champs
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  30 rue des Petits Champs
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  75002 Paris
                </p>
              </div>
            </div>
          </div>

          {/* Colonne 3 */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px',
              fontWeight: 700, letterSpacing: '0.25em',
              textTransform: 'uppercase', color: '#e3c199',
              marginBottom: '28px',
            }}>
              Horaires
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#e5e2e1', marginBottom: '4px' }}>
                  Lundi – Vendredi
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  12h00 – 15h00
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  17h00 – 22h30
                </p>
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#e5e2e1', marginBottom: '4px' }}>
                  Samedi – Dimanche & Jours fériés
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  12h00 – 15h30
                </p>
                <p style={{ fontFamily: '"Newsreader", serif', fontSize: '15px', color: 'rgba(228,190,186,0.55)' }}>
                  18h00 – 22h30
                </p>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(228,190,186,0.35)', marginTop: '8px' }}>
                Tél : <span style={{ color: '#e5e2e1' }}>01 72 63 63 55</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bas du footer */}
        <div style={{
          borderTop: '1px solid rgba(91,64,61,0.15)',
          padding: '24px 48px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px',
            color: 'rgba(228,190,186,0.25)', letterSpacing: '0.05em',
          }}>
            © 2026 Dosanko Larmen Paris · 創業昭和三十六年
          </p>
        </div>
      </div>
    </footer>
  )
}