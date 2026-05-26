export default function Footer() {
    return (
      <footer className="hidden md:block bg-surface border-t border-outline-variant/20 mt-20">
        <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-3 gap-8">
  
          <div>
            <p className="font-display text-2xl font-bold text-primary mb-1">どさん子</p>
            <p className="text-xs font-ui tracking-[0.15em] uppercase text-secondary mb-4">
              Dosanko Larmen — Depuis 1961
            </p>
            <p className="text-sm font-body text-on-surface-variant/70 leading-relaxed">
              Ramen traditionnel de Sapporo,<br />au cœur de Paris depuis plus de 50 ans.
            </p>
          </div>
  
          <div>
            <p className="text-xs font-ui font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Adresses</p>
            <div className="space-y-3 text-sm font-body text-on-surface-variant">
              <div>
                <p className="text-on-surface font-medium">Sainte-Anne</p>
                <p>40 rue Sainte-Anne, 75002 Paris</p>
              </div>
              <div>
                <p className="text-on-surface font-medium">Petits Champs</p>
                <p>30 rue des Petits Champs, 75002 Paris</p>
              </div>
            </div>
          </div>
  
          <div>
            <p className="text-xs font-ui font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Horaires</p>
            <div className="space-y-1 text-sm font-body text-on-surface-variant">
              <p><span className="text-on-surface">Lun – Ven</span> · 12h–15h / 17h–22h30</p>
              <p><span className="text-on-surface">Sam – Dim</span> · 12h–15h30 / 18h–22h30</p>
              <p className="mt-3 text-xs text-on-surface-variant/50">Tél : 01 72 63 63 55</p>
            </div>
          </div>
  
        </div>
        <div className="border-t border-outline-variant/10 py-4 text-center text-xs font-ui text-on-surface-variant/30">
          © 2026 Dosanko Larmen Paris · 創業昭和三十六年
        </div>
      </footer>
    )
  }