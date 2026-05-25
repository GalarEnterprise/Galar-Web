import Button from './ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <span className="badge">Sistemas Inteligentes & Automatización</span>
        <h1>
          Escala tu negocio sin el <span className="highlight">caos operativo</span>.
        </h1>
        <p className="section-subtitle">
          Construimos sistemas automatizados para que recuperes tu tiempo. Deja de apagar fuegos y empieza a crecer de forma estructurada.
        </p>
        <div className={styles.actions}>
          <Button href="#contacto" variant="primary">Agenda tu auditoría</Button>
          <Button href="#guia" variant="transitional">Descarga la guía gratuita</Button>
        </div>
      </div>
      {/* Decorative Blobs */}
      <div className={`${styles.blob} ${styles.blob1}`}></div>
      <div className={`${styles.blob} ${styles.blob2}`}></div>
    </header>
  );
}
