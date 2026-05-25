export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2.5rem 0',
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-secondary)',
      fontSize: '0.875rem'
    }}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Galar Enterprise. Consultoría en Automatización e IA Local.</p>
      </div>
    </footer>
  );
}
