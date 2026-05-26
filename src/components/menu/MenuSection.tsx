import DishCard from './DishCard'
import type { MenuCategory } from '../../constants/menuData'

export default function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <div style={{ marginBottom: '80px' }}>

      {/* Titre section */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '16px',
        marginBottom: '32px', paddingBottom: '16px',
        borderBottom: '1px solid rgba(91,64,61,0.2)',
      }}>
        <h2 style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '28px', fontWeight: 700, color: '#e5e2e1',
        }}>
          {category.label}
        </h2>
        {category.labelJp && (
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '12px',
            color: 'rgba(228,190,186,0.35)', letterSpacing: '0.15em',
          }}>
            {category.labelJp}
          </span>
        )}
        <div style={{ flex: 1, height: '1px', background: 'rgba(91,64,61,0.15)' }} />
      </div>

      {/* Grille plats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
      }}>
        {category.dishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>

    </div>
  )
}