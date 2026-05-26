import SectionTitle from '../UI/UX/SectionTitle'

const horaires = [
  { jour: 'Lundi – Vendredi', jourJp: '月曜日〜金曜日', plages: ['12h00 – 15h00', '17h00 – 22h30'] },
  { jour: 'Samedi – Dimanche', jourJp: '土曜日・日曜日', plages: ['12h00 – 15h30', '18h00 – 22h30'] },
  { jour: 'Jours fériés', jourJp: '祝日', plages: ['12h00 – 15h30', '18h00 – 22h30'] },
]

export default function Horaires() {
  return (
    <section style={{ padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

          <div>
            <SectionTitle label="Horaires" labelJp="営業時間" title="Quand nous rendre visite" />
            <p style={{ fontFamily: '"Newsreader", serif', fontSize: '17px', color: 'rgba(228,190,186,0.7)', lineHeight: 1.8 }}>
              Nous vous accueillons sans réservation. Service continu le week-end, coupure en milieu de journée en semaine.
            </p>
            <p style={{ marginTop: '24px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(228,190,186,0.4)' }}>
              Tél : <span style={{ color: '#e5e2e1' }}>01 72 63 63 55</span>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {horaires.map(h => (
              <div key={h.jour} style={{
                border: '1px solid rgba(91,64,61,0.25)',
                padding: '20px 24px', borderRadius: '2px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
              }}>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px', color: '#e5e2e1' }}>{h.jour}</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(228,190,186,0.35)', marginTop: '2px', letterSpacing: '0.1em' }}>{h.jourJp}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  {h.plages.map(p => (
                    <p key={p} style={{ fontFamily: '"Shippori Mincho", serif', fontSize: '18px', fontWeight: 700, color: '#ffb3ac' }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}