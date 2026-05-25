import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const btnClass = `${styles.btn} ${styles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={btnClass} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
