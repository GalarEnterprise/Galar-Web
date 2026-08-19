'use client';
import { useState } from 'react';
import styles from './Accordion.module.css';

const faqs = [
  {
    id: 1,
    myth: "La IA viene a reemplazar empresas y empleados.",
    reality: "La IA no reemplaza; optimiza. Viene a potenciar a tu empresa para que ganes más gastando menos, liberando a tu equipo humano del trabajo robótico para que se enfoquen en lo que aporta verdadero valor estratégico."
  },
  {
    id: 2,
    myth: "La automatización es sólo para grandes multinacionales.",
    reality: "Las herramientas actuales (n8n, Python) permiten crear soluciones potentes y a medida para cualquier tamaño de negocio, con un retorno de inversión claro y rápido que se paga solo en meses."
  },
  {
    id: 3,
    myth: "Implementar IA desordenará mis finanzas o procesos.",
    reality: "Como Contador Público, cada automatización se diseña respetando y fortaleciendo la estructura financiera de tu empresa. Integramos bases de datos SQL para que tengas claridad absoluta y cero caos."
  }
];

export default function Accordion() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="educacion" className={`section-padding ${styles.eduSection}`}>
      <div className="container">
        <h2 className="section-title">Mitos vs. Realidades de la IA</h2>
        <div className={styles.accordion}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
                <button 
                  className={styles.accordionHeader} 
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.headerContent}>
                    <span className={styles.mythBadge}>Mito:</span> 
                    <span className={styles.mythText}>{faq.myth}</span>
                  </div>
                  <span className={styles.iconToggle}>{isOpen ? '−' : '+'}</span>
                </button>
                <div 
                  className={styles.accordionContent}
                  style={{ maxHeight: isOpen ? '200px' : '0' }}
                >
                  <p>
                    <span className={styles.realityBadge}>Realidad:</span> {faq.reality}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
