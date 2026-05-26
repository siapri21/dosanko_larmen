type SectionTitleProps = {
    label: string
    labelJp?: string
    title: string
    center?: boolean
  }
  
  export default function SectionTitle({ label, labelJp, title, center = false }: SectionTitleProps) {
    return (
      <div className={`mb-12 ${center ? 'text-center' : ''}`}>
        <div className={`flex items-center gap-3 mb-3 ${center ? 'justify-center' : ''}`}>
          <span className="text-xs font-ui font-semibold tracking-[0.2em] uppercase text-secondary">
            {label}
          </span>
          {labelJp && (
            <>
              <span className="text-outline-variant">·</span>
              <span className="text-xs font-ui text-on-surface-variant/60 tracking-wider">
                {labelJp}
              </span>
            </>
          )}
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface leading-tight">
          {title}
        </h2>
        <div className={`mt-4 h-px w-16 bg-primary-container ${center ? 'mx-auto' : ''}`} />
      </div>
    )
  }