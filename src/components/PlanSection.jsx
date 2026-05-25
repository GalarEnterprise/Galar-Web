import styles from './PlanSection.module.css';

export default function PlanSection() {
  return (
    <section id="plan" className={`section-padding ${styles.planSection}`}>
      <div className="container">
        <h2 className="section-title">Tu plan para la eficiencia</h2>
        <p className="section-subtitle">Tres pasos simples para salir del caos y empezar a escalar.</p>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Analizamos tu cuello de botella</h3>
            <p>Mapeamos tus procesos actuales para identificar exactamente dónde estás perdiendo tiempo y dinero.</p>
          </div>
          <div className={styles.stepConnector}></div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>Construimos tu sistema</h3>
            <p>Desarrollamos una automatización a medida o un agente de IA que trabaje 24/7 sin cometer errores.</p>
          </div>
          <div className={styles.stepConnector}></div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Escalas sin estrés</h3>
            <p>Tu equipo recupera horas de su día, se reducen costos operativos y tu negocio crece con orden.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
