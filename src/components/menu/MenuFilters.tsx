import type { MenuCategory } from '../../constants/menuData'

type Props = {
  categories: MenuCategory[]
  activeId: string
  onChange: (id: string) => void
}

export default function MenuFilters({ categories, activeId, onChange }: Props) {
  return (
    <div style={{
      position: 'sticky', top: '64px', zIndex: 40,
      background: 'rgba(19,19,19,0.95)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(91,64,61,0.2)',
      padding: '0 48px',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', gap: '0', overflowX: 'auto',
        scrollbarWidth: 'none',
      }}>
        {/* Bouton "Tout" */}
        <button
          onClick={() => onChange('all')}
          style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px',
            fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '18px 24px',
            background: 'none', border: 'none', cursor: 'pointer',
            borderBottom: activeId === 'all' ? '2px solid #ffb3ac' : '2px solid transparent',
            color: activeId === 'all' ? '#ffb3ac' : 'rgba(228,190,186,0.5)',
            whiteSpace: 'nowrap', transition: 'all 0.2s',
          }}
        >
          Tout
        </button>

        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px',
              fontWeight: 600, letterSpacing: '0.15em',
              textTransform: 'uppercase', padding: '18px 24px',
              background: 'none', border: 'none', cursor: 'pointer',
              borderBottom: activeId === cat.id ? '2px solid #ffb3ac' : '2px solid transparent',
              color: activeId === cat.id ? '#ffb3ac' : 'rgba(228,190,186,0.5)',
              whiteSpace: 'nowrap', transition: 'all 0.2s',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}