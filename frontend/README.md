# BMW Portal — Frontend

Aplicación web desarrollada en **React + Vite** que consume la API de autenticación JWT del backend FastAPI. Implementa el sistema de diseño corporativo BMW definido en [`DESIGN.md`](../design.md).

---

## Características

| Característica | Detalle |
|---|---|
| Framework | React 18 con Vite |
| Enrutamiento | React Router v7 |
| Autenticación | JWT almacenado en `sessionStorage` |
| Diseño | BMW Corporate Design System (DESIGN.md) |
| Tipografía | Inter 700 / 300 (sustituta de BMW Type Next Latin) |

---

## Páginas

### `/login` — Inicio de sesión

- Formulario con campos **Usuario** y **Contraseña**.
- Llama al endpoint `POST /token` del backend con formato `application/x-www-form-urlencoded`.
- Al autenticarse correctamente guarda el token JWT en `sessionStorage` y redirige a `/welcome`.
- Muestra mensaje de error si las credenciales son incorrectas.
- **Credenciales por defecto:** `admin` / `admin123`

### `/welcome` — Página de bienvenida (protegida)

- Accesible **sólo** si hay un token válido en sesión.
- Muestra el nombre de usuario autenticado.
- Permite cerrar sesión (elimina el token de `sessionStorage` y redirige a `/login`).
- Presenta una galería de modelos BMW siguiendo el diseño corporativo.

### Ruta raíz `/`

Redirige automáticamente a `/login`.

---

## Requisitos previos

- Node.js ≥ 18
- npm ≥ 9
- Backend corriendo en `http://localhost:8000` (ver [`backend/README.md`](../backend/README.md))

---

## Instalación y ejecución

```bash
# 1. Clonar el repositorio (si no lo tienes)
git clone <repo-url>
cd <repo>/frontend

# 2. Instalar dependencias
npm install

# 3. (Opcional) Configurar la URL del backend
cp .env.example .env
# Editar VITE_API_URL si el backend corre en otro puerto/host

# 4. Iniciar en modo desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

> **Nota:** En modo desarrollo, Vite incluye un proxy que redirige `/token`, `/verify` y `/refresh` al backend en `http://localhost:8000`, evitando problemas de CORS.

---

## Producción

```bash
npm run build
```

Los archivos estáticos se generan en la carpeta `dist/`. Sirve con cualquier servidor web estático o CDN.

---

## Variables de entorno

| Variable | Valor por defecto | Descripción |
|---|---|---|
| `VITE_API_URL` | `http://localhost:8000` | URL base de la API del backend |

---

## Estructura del proyecto

```
frontend/
├── public/             # Archivos estáticos
├── src/
│   ├── context/
│   │   └── AuthContext.jsx     # Estado de autenticación + helpers login/logout
│   ├── components/
│   │   └── ProtectedRoute.jsx  # Guard de ruta privada
│   ├── pages/
│   │   ├── LoginPage.jsx       # Página de inicio de sesión
│   │   ├── LoginPage.module.css
│   │   ├── WelcomePage.jsx     # Página de bienvenida (protegida)
│   │   └── WelcomePage.module.css
│   ├── App.jsx         # Configuración de rutas
│   ├── main.jsx        # Punto de entrada
│   └── index.css       # Tokens de diseño BMW + reset global
├── index.html
├── vite.config.js
├── .env.example
└── package.json
```

---

## Diseño

El frontend sigue el estándar **BMW Corporate Design System** definido en [`DESIGN.md`](../design.md):

- **Paleta:** Azul BMW (`#1c69d4`) como acción primaria, lienzo blanco (`#ffffff`), banda oscura (`#1a2129`).
- **Tipografía:** Inter 700 para titulares y etiquetas; Inter 300 para texto corrido.
- **Botones:** Rectangulares, `border-radius: 0px` — dialecto corporativo BMW.
- **Sin sombras:** La profundidad proviene del contraste color-bloque (claro ↔ oscuro).
- **Ritmo de sección:** `padding: 80px` en cada banda editorial.

---

## Licencia

MIT
