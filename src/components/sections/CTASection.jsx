import Button from '@/components/ui/Button';
import styles from './CTASection.module.css';

export default function CTASection() {
  return (
    <section id="contacto" className={`section-padding ${styles.ctaSection}`}>
      <div className={`container glass-panel ${styles.ctaContainer}`}>
        <h2 className="section-title">No dejes que el caos frene tu crecimiento</h2>
        <p>Cada día que pasas atado a procesos manuales es un día en el que tu competencia avanza. El caos operativo no se resolverá solo. Es momento de tomar el control.</p>
        <div className={styles.ctaActions}>
          <Button href="mailto:contacto@galarenterprise.com" variant="primary">Agenda tu auditoría ahora</Button>
        </div>
      </div>
      {/* Decorative Blob */}
      <div className={`${styles.blob} ${styles.blobCta}`}></div>
    </section>
  );
}
