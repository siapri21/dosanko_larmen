import AdresseCard from '../components/contact/AdresseCard'
import MapEmbed from '../components/contact/MapEmbed'
import InfoContact from '../components/contact/InfoContact'
import SectionTitle from '../components/UI/UX/SectionTitle'

const horaires = [
  { jour: 'Lundi – Vendredi', jourJp: '月曜日〜金曜日', plages: ['12h–15h', '17h–22h30'] },
  { jour: 'Samedi – Dimanche', jourJp: '土曜日・日曜日', plages: ['12h–15h30', '18h–22h30'] },
  { jour: 'Jours fériés', jourJp: '祝日', plages: ['12h–15h30', '18h–22h30'] },
]

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

export default function Contact() {
  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', background: '#131313' }}>

      {/* Hero */}
      <div style={{
        padding: '80px 48px 60px',
        maxWidth: '1200px', margin: '0 auto',
        borderBottom: '1px solid rgba(91,64,61,0.15)',
      }}>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '11px',
          fontWeight: 600, letterSpacing: '0.3em',
          textTransform: 'uppercase', color: '#e3c199', marginBottom: '12px',
        }}>
          Contact & Accès · アクセス
        </p>
        <h1 style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '56px', fontWeight: 800,
          color: '#e5e2e1', lineHeight: 1.1,
        }}>
          Venez nous rendre<br />visite à Paris
        </h1>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px' }}>

        {/* Infos pratiques */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '80px', alignItems: 'start' }}>
          <div>
            <SectionTitle label="Infos Pratiques" labelJp="情報" title="Avant de venir" />
            <InfoContact />
          </div>
          <div>
            <SectionTitle label="Localisation" labelJp="場所" title="Nous trouver" />
            <MapEmbed />
          </div>
        </div>

        {/* Adresses */}
        <div style={{ marginBottom: '80px' }}>
          <SectionTitle label="Nos Adresses" labelJp="住所" title="Deux adresses à Paris" center />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '16px' }}>
            {adresses.map(a => (
              <AdresseCard
                key={a.nom}
                nom={a.nom}
                adresse={a.adresse}
                cp={a.cp}
                metro={a.metro}
                horaires={horaires}
                principal={a.principal}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}