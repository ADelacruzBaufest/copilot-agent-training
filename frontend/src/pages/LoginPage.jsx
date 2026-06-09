import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(username, password);
      navigate('/welcome', { replace: true });
    } catch (err) {
      setError(err.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      {/* Dark hero band */}
      <div className={styles.hero}>
        <div className={styles.heroBadge}>
          <BmwLogo />
        </div>
        <h1 className={styles.heroTitle}>Bienvenido</h1>
        <p className={styles.heroSub}>Ingresa tus credenciales para continuar</p>
      </div>

      {/* Login card */}
      <div className={styles.content}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Iniciar sesión</h2>

          {error && (
            <div className={styles.errorBanner} role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label htmlFor="username" className={styles.label}>
                USUARIO
              </label>
              <input
                id="username"
                type="text"
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                disabled={loading}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="password" className={styles.label}>
                CONTRASEÑA
              </label>
              <input
                id="password"
                type="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className={styles.btnPrimary}
              disabled={loading || !username || !password}
            >
              {loading ? 'INGRESANDO…' : 'INGRESAR'}
            </button>
          </form>
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={styles.footerText}>© {new Date().getFullYear()} BMW AG. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

function BmwLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="64"
      height="64"
      aria-label="BMW logo"
    >
      <circle cx="50" cy="50" r="48" fill="none" stroke="#ffffff" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="#ffffff" strokeWidth="1" />
      {/* Quadrants */}
      <path d="M50 12 A38 38 0 0 1 88 50 L50 50 Z" fill="#1c69d4" />
      <path d="M50 50 L88 50 A38 38 0 0 1 50 88 Z" fill="#ffffff" />
      <path d="M12 50 A38 38 0 0 1 50 12 L50 50 Z" fill="#ffffff" />
      <path d="M50 88 A38 38 0 0 1 12 50 L50 50 Z" fill="#1c69d4" />
      {/* Text */}
      <text x="50" y="47" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" fontFamily="Inter, sans-serif" letterSpacing="1">BMW</text>
    </svg>
  );
}
