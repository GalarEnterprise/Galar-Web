import styles from './VillainSection.module.css';

export default function VillainSection() {
  return (
    <section id="problema" className={`section-padding ${styles.villainSection}`}>
      <div className="container">
        <h2 className="section-title">El costo invisible de operar sin sistemas</h2>
        <p className="section-subtitle">
          Cada día con procesos manuales pierdes dinero en errores y desperdicias el talento de tu equipo.
        </p>
        <div className={styles.cardsGrid}>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.icon}>💸</div>
            <h3>Pérdida de dinero</h3>
            <p>Los errores humanos constantes en procesos manuales están drenando tus utilidades en silencio y generando retrabajos diarios.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.icon}>⏳</div>
            <h3>Desperdicio de talento</h3>
            <p>Tu equipo pasa horas en hojas de cálculo y tareas repetitivas en lugar de actividades que generen verdadero valor al negocio.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <div className={styles.icon}>📉</div>
            <h3>Ceguera estratégica</h3>
            <p>Falta de claridad en los datos financieros y operativos que te impide tomar decisiones rápidas y estratégicas para crecer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
