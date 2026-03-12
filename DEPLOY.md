# Publicar en GitHub Pages (gratis)

## 1. Crea el repo en GitHub

1. Entra a [github.com/new](https://github.com/new).
2. Nombre del repo (ej: `pmclanding` o `ruta-critica`).
3. **Public**, sin README ni .gitignore (ya tienes el proyecto).
4. Create repository.

## 2. Sube el proyecto

En la carpeta del proyecto (donde está `package.json`), en PowerShell:

```powershell
cd "c:\Users\crist\Downloads\pmclanding"

git init
git add .
git commit -m "Landing RutaCrítica"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git
git push -u origin main
```

(Reemplaza `TU_USUARIO` y `NOMBRE_DEL_REPO` por tu usuario de GitHub y el nombre del repo.)

## 3. Activa GitHub Pages (obligatorio antes del primer deploy)

Si no haces esto, el workflow falla con *"Get Pages site failed"* o *"Not Found"*.

1. En tu repo de GitHub: **Settings** (pestaña del repo).
2. En el menú izquierdo, **Pages** (bajo "Code and automation").
3. En **Build and deployment**:
   - **Source**: elige **GitHub Actions** (no "Deploy from a branch").
4. No hace falta elegir rama ni carpeta; con eso ya queda activado.
5. Guarda si hace falta y **vuelve a ejecutar el workflow**: pestaña **Actions** → elige el workflow **Deploy to GitHub Pages** → **Re-run all jobs**.

## 4. Espera el despliegue

- Cada vez que hagas **push a `main`**, se ejecutará el workflow, hará `npm run build` y publicará la web.
- La primera vez puede tardar 1–2 minutos.
- Para ver el estado: pestaña **Actions** del repo. Si el workflow está en verde, está desplegado.

## 5. Tu URL

Será algo como:

**https://TU_USUARIO.github.io/NOMBRE_DEL_REPO/**

Ejemplo: si el repo se llama `pmclanding` y tu usuario es `crist`, la URL sería:

**https://crist.github.io/pmclanding/**

---

## Si sale "Get Pages site failed" o "HttpError: Not Found"

- **Causa:** GitHub Pages no está activado o la fuente no es "GitHub Actions".
- **Solución:** Ve a **Settings → Pages** del repo. En **Source** elige **GitHub Actions**, guarda y en **Actions** vuelve a ejecutar el workflow (**Re-run all jobs**).

---

Si cambias el nombre del repo más adelante, no hace falta cambiar código: el workflow usa el nombre del repo y la base path se ajusta sola.
