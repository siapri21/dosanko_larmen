import SectionTitle from '../UI/UX/SectionTitle'

const photos = [
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80', alt: 'Salle du restaurant', grid: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80', alt: 'Ramen', grid: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80', alt: 'Shoyu', grid: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80', alt: 'Gyoza', grid: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80', alt: 'Ramen froid', grid: 'col-span-1 row-span-1' },
]

export default function Ambiance() {
  return (
    <section style={{ background: '#1c1b1b', padding: '120px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        <SectionTitle label="L'Ambiance" labelJp="雰囲気" title="Dans nos murs" center />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 220px)',
          gap: '8px',
          marginTop: '16px',
        }}>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', overflow: 'hidden', borderRadius: '2px' }}>
            <img src={photos[0].src} alt={photos[0].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
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