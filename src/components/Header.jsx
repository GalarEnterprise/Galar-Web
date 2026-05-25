import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/nuevologo.webp" 
            alt="Galar Enterprise Logo" 
            width={160} 
            height={50} 
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <nav className={styles.nav}>
          <Link href="#servicios">Servicios</Link>
          <Link href="#recursos">Recursos</Link>
          <Link href="#contacto" className="badge">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
