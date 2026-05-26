import { useState, useRef } from 'react'
import MenuFilters from '../components/menu/MenuFilters'
import MenuSection from '../components/menu/MenuSection'
import SetMenuBanner from '../components/menu/SetMenuBanner'
import { menuCategories } from '../constants/menuData'

export default function Menu() {
  const [activeId, setActiveId] = useState('all')
  const topRef = useRef<HTMLDivElement>(null)

  const handleChange = (id: string) => {
    setActiveId(id)
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const displayed = activeId === 'all'
    ? menuCategories
    : menuCategories.filter(c => c.id === activeId)

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh', background: '#131313' }}>

      {/* Hero carte */}
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
          Notre Carte · メニュー
        </p>
        <h1 style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '56px', fontWeight: 800,
          color: '#e5e2e1', lineHeight: 1.1, marginBottom: '16px',
        }}>
          Ramen & Saveurs<br />du Japon
        </h1>
        <p style={{
          fontFamily: '"Newsreader", serif', fontSize: '17px',
          color: 'rgba(228,190,186,0.6)', maxWidth: '500px', lineHeight: 1.8,
        }}>
          Tous nos prix sont taxes et services compris. Nous n'acceptons pas le paiement par chèque.
        </p>
      </div>

      {/* Filtres sticky */}
      <div ref={topRef}>
        <MenuFilters categories={menuCategories} activeId={activeId} onChange={handleChange} />
      </div>

      {/* Contenu */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px' }}>
        <SetMenuBanner />
        {displayed.map(cat => (
          <MenuSection key={cat.id} category={cat} />
        ))}
      </div>

    </div>
  )
}