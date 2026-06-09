import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';

export default function WelcomePage() {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <div className={styles.page}>
      {/* Top Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <BmwLogo />
          <div className={styles.navRight}>
            <span className={styles.navUser}>{username}</span>
            <button className={styles.btnSecondary} onClick={handleLogout}>
              CERRAR SESIÓN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Band */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Bienvenido, {username}</h1>
          <p className={styles.heroSub}>
            Has iniciado sesión exitosamente en el portal BMW.
          </p>
          <button className={styles.btnSecondaryDark} onClick={handleLogout}>
            CERRAR SESIÓN ›
          </button>
        </div>
      </section>

      {/* Feature Band */}
      <section className={styles.featureBand}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Explora nuestra gama</h2>
          <div className={styles.cardGrid}>
            {MODELS.map((model) => (
              <div key={model.name} className={styles.modelCard}>
                <div className={styles.modelCardPhoto}>
                  <ModelPlaceholder label={model.label} />
                </div>
                <div className={styles.modelCardBody}>
                  <h3 className={styles.modelName}>{model.name}</h3>
                  <p className={styles.modelTag}>{model.tagline}</p>
                  <span className={styles.learnMore}>VER MÁS ›</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Descubre el Futuro</h2>
          <p className={styles.ctaSub}>Tecnología de vanguardia al servicio de la movilidad.</p>
          <button className={styles.btnSecondaryDark} onClick={handleLogout}>
            CERRAR SESIÓN ›
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerLinks}>
            <span className={styles.footerGroup}>Modelos</span>
            <span className={styles.footerGroup}>Servicios</span>
            <span className={styles.footerGroup}>Distribuidores</span>
            <span className={styles.footerGroup}>Acerca de</span>
          </div>
          <p className={styles.footerCopy}>
            © {new Date().getFullYear()} BMW AG. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

const MODELS = [
  { name: 'BMW iX3', label: 'iX3', tagline: 'SAV eléctrico de nueva generación' },
  { name: 'BMW Serie 3', label: '3', tagline: 'La referencia del segmento premium' },
  { name: 'BMW X5', label: 'X5', tagline: 'Poder y elegancia en cada trayecto' },
  { name: 'BMW Serie 7', label: '7', tagline: 'La cúspide del lujo y la tecnología' },
];

function ModelPlaceholder({ label }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 160"
      width="100%"
      height="160"
      aria-hidden="true"
    >
      <rect width="280" height="160" fill="#fafafa" />
      <text
        x="140"
        y="90"
        textAnchor="middle"
        fontSize="42"
        fontWeight="700"
        fill="#e6e6e6"
        fontFamily="Inter, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

function BmwLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="40"
      height="40"
      aria-label="BMW logo"
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="#262626" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#262626" strokeWidth="1" />
      <path d="M50 12 A38 38 0 0 1 88 50 L50 50 Z" fill="#1c69d4" />
      <path d="M50 50 L88 50 A38 38 0 0 1 50 88 Z" fill="#ffffff" />
      <path d="M12 50 A38 38 0 0 1 50 12 L50 50 Z" fill="#ffffff" />
      <path d="M50 88 A38 38 0 0 1 12 50 L50 50 Z" fill="#1c69d4" />
      <text x="50" y="47" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1c69d4" fontFamily="Inter, sans-serif" letterSpacing="1">BMW</text>
    </svg>
  );
}
