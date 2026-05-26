export default function MapEmbed() {
    return (
      <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid rgba(91,64,61,0.2)' }}>
        <iframe
          title="Dosanko Larmen - 40 rue Sainte-Anne Paris"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.4!2d2.3364!3d48.8651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2e6b0e1b1f%3A0x0!2s40+Rue+Sainte-Anne%2C+75002+Paris!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block', filter: 'grayscale(80%) invert(90%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }