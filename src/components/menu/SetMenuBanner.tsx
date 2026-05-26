export default function SetMenuBanner() {
  const options = [
    { emoji: '🥟', label: '4 Gyoza', sublabel: 'Poulet ou légumes' },
    { emoji: '🌿', label: '½ Edamame', sublabel: 'Fèves de soja' },
    { emoji: '🥩', label: '½ Porc mijoté', sublabel: 'Rôti mariné' },
  ]

  return (
    <div style={{
      marginBottom: '64px',
      border: '1px solid rgba(211,47,47,0.25)',
      borderRadius: '2px',
      overflow: 'hidden',
      background: 'rgba(211,47,47,0.05)',
    }}>

      {/* Ligne du haut */}
      <div style={{
        padding: '28px 40px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(211,47,47,0.15)',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '11px',
            fontWeight: 700, letterSpacing: '0.25em',
            textTransform: 'uppercase', color: '#ffb3ac',
            marginBottom: '6px',
          }}>
            Set Menu · セットメニュー
          </p>
          <h3 style={{
            fontFamily: '"Shippori Mincho", serif',
            fontSize: '20px', fontWeight: 700, color: '#e5e2e1',
          }}>
            1 plat au choix + 1 accompagnement
          </h3>
        </div>
        <div style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '38px', fontWeight: 800, color: '#ffb3ac',
        }}>
          +3,80€
        </div>
      </div>

      {/* Ligne des 3 options */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
      }}>
        {options.map((opt, i) => (
          <div
            key={opt.label}
            style={{
              padding: '24px 32px',
              display: 'flex', alignItems: 'center', gap: '16px',
              borderRight: i < 2 ? '1px solid rgba(91,64,61,0.2)' : 'none',
            }}
          >
            <span style={{ fontSize: '28px' }}>{opt.emoji}</span>
            <div>
              <p style={{
                fontFamily: '"Shippori Mincho", serif',
                fontSize: '16px', fontWeight: 700, color: '#e5e2e1',
                marginBottom: '2px',
              }}>
                {opt.label}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: '11px',
                color: 'rgba(228,190,186,0.45)',
              }}>
                {opt.sublabel}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}