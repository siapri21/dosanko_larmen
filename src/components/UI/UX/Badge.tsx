type BadgeProps = {
    label: string
  }
  
  const badgeColors: Record<string, string> = {
    'Signature': 'border-secondary/50 text-secondary',
    'Royal': 'border-primary/50 text-primary',
    'Végétarien': 'border-green-400/50 text-green-400',
    'Épicé': 'border-red-400/50 text-red-400',
    'Fruits de mer': 'border-blue-400/50 text-blue-400',
    'Froid': 'border-cyan-400/50 text-cyan-400',
    'Nouveau': 'border-yellow-400/50 text-yellow-400',
    'Été': 'border-orange-400/50 text-orange-400',
    'Alcool': 'border-amber-400/50 text-amber-400',
    'Sans alcool': 'border-green-400/50 text-green-400',
    'default': 'border-on-surface-variant/40 text-on-surface-variant',
  }
  export default function Badge({ label }: BadgeProps) {
    const color = badgeColors[label] ?? badgeColors['default']
    return (
      <span className={`text-[10px] font-ui font-semibold tracking-widest uppercase border px-2 py-0.5 rounded ${color}`}>
        {label}
      </span>
    )
  }