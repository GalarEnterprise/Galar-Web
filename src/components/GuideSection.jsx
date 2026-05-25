import styles from './GuideSection.module.css';

export default function GuideSection() {
  return (
    <section id="guia" className={`section-padding ${styles.guideSection}`}>
      <div className="container">
        <div className={styles.guideContent}>
          <div className={styles.guideText}>
            <h2 className="section-title left-align">Conoce a tu aliado estratégico</h2>
            <p>Hola. Soy un <strong>Contador Público</strong> que domina la <strong>Inteligencia Artificial y la automatización</strong>.</p>
            <p>A diferencia de las agencias de tecnología tradicionales, yo entiendo los números de tu negocio y hablo el idioma de las máquinas (n8n, Python, bases de datos SQL, IA local).</p>
            <p>No deberías tener que aprender a programar ni convertirte en un experto en tecnología para escalar tu empresa. Para eso estoy yo.</p>
            <div className={styles.successStory}>
              <span className={styles.storyLabel}>Caso de Éxito Destacado</span>
              <p className={styles.storyQuote}>"Reestructuramos la logística de una tienda de miles de productos enviando reportes automáticos por WhatsApp, eliminando errores y recuperando 15 horas de trabajo a la semana."</p>
            </div>
          </div>
          <div className={styles.guideImage}>
            <div className={styles.abstractGraphic}>
              <div className="glass-panel" style={{ padding: '2rem', width: '280px', height: '320px', display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 2 }}>
                <div className={styles.line}></div>
                <div className={`${styles.line} ${styles.short}`}></div>
                <div className={styles.line}></div>
                <div className={`${styles.line} ${styles.medium}`}></div>
              </div>
              <div className={`${styles.floatingBubble} ${styles.bubble1}`}></div>
              <div className={`${styles.floatingBubble} ${styles.bubble2}`}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
