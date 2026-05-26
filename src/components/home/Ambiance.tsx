import SectionTitle from '../UI/UX/SectionTitle'

const photos = [
  { src: '/salledosa.jpeg', alt: 'Salle du restaurant' },
  { src: '/devanture.jpeg', alt: 'Devanture Sainte-Anne' },
  { src: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=600&q=80', alt: 'Ramen miso' },
  { src: '/devanture2.jpeg', alt: 'Devanture Petits Champs' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80', alt: 'Gyoza' },
]

export default function Ambiance() {
  return (
    <section style={{ background: '#1c1b1b', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionTitle label="L'Ambiance" labelJp="雰囲気" title="Dans nos murs" center />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 240px)',
          gap: '8px',
          marginTop: '16px',
        }}>
          {/* Grande image à gauche */}
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', overflow: 'hidden', borderRadius: '2px' }}>
            <img src={photos[0].src} alt={photos[0].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          {/* 4 petites images à droite */}
          {photos.slice(1).map((p, i) => (
            <div key={i} style={{ overflow: 'hidden', borderRadius: '2px' }}>
              <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}